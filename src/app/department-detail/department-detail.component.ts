import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html'
})
export class DepartmentDetailComponent implements OnInit {

  departmentId = 0;
  constructor(private route: ActivatedRoute) {
    //this.departmentId= this.route.snapshot.params['id'];
    this.route.params.subscribe(param => {
      this.departmentId= parseInt(param['id']);
      console.log(this.departmentId);
    
    });

  }

  ngOnInit() {
//    debugger;
  
    // this.route.params.subscribe(param => {
    //   let id = parseInt(param.get('id'));
    //   this.departmentId=id;
    // });

    // goPrevious() {
    //   let previousId = this.departmentId - 1;
    //   this.router.navigate(['/departments', previousId]);
    // }

    // goNexts() {
    //   let nextId = this.departmentId + 1;
    //   this.router.navigate(['/departments', nextId]);
    // }
  }
}