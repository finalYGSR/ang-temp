import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  funsales:any=[{}];
  data:any[]=[];
  cafedata:any[]=[];
caferequest:any[]=[];
delivryrequest:any[]=[];
testmonial:any[]=[];
  deliverdata:any[]=[];
  betweendate:any=[{}]
  salesdata:any=[{}];
  selectedItem:any={};
  selectsales:any={}
  display_image:string|any

  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }



  getcustomer(roleid:number=5)
  {

   return this.http.get<any>('https://localhost:44376/api/Users/GetAllUsers/'+roleid).subscribe((res:any)=>{this.data=res})


  }

  updateTrainer(data:any)
  {
    this.spiner.show();

     this.http.put('https://localhost:44376/api/Users/UpdateUser',data).subscribe((result)=>{
     
     this.toaster.success('Trainer Updated');
     this.spiner.hide();
      console.log(data);
    },err=>{
      console.log(err);
      console.log(data);
      this.toaster.error(err);
       })
  }





 
  
    


  Deleteuser(id:number){
    //from home service 
    debugger
    this.spiner.show();
    this.http.delete('https://localhost:44376/api/Users/DeleteUsers/'+id).subscribe((data:any)=>{
      this.toaster.success('Deleted');
      this.spiner.hide();
    }
    );    
  }




//   uploadimage(form:FormData)
// {

//   const headerDict = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//     }
//     const requestOptions = {
//     headers: new HttpHeaders(headerDict),
//     };
    
//     this.http.post('https://localhost:44376/api/Course/uploadImage',form).subscribe((data: any) => {
//     this.display_image=data.image;
//     console.log(this.display_image)
    
//     if(data){
//     console.log(this.display_image=data.imagename);}
//     })
// }





  getallfuncsales()
  {

    return this.http.get('https://localhost:44376/api/Sales/funsales').subscribe((res)=>{this.funsales=res 
    console.log(this.funsales)
  })

//     return this.http.get('https://localhost:44376/api/Sales/funsales').subscribe((res)=>{this.funsales=res
// this.toaster.success("Datareteive") 
//   },(error:any)=>{this.toaster.error("invalid")})

  }



  getbetweendate(DateFrom:Date,DateTo:Date)
  {
  
    console.log(DateFrom,DateTo)
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
  
  this.http.post<any>('https://localhost:44376/api/Sales/serachDate',{datefrom:DateFrom,dateto:DateTo},requestOptions).subscribe((res:any)=>{this.salesdata=res 

console.log(this.salesdata)})
  
  console.log(this.betweendate)
  }


  

  getdelivery(roleid:number=4)
  {

   return this.http.get<any>('https://localhost:44376/api/Users/GetAllUsers/'+roleid).subscribe((res:any)=>{this.deliverdata=res})

  }

  getcafe(roleid:number=2)
  {

   return this.http.get<any>('https://localhost:44376/api/Users/GetAllUsers/'+roleid).subscribe((res:any)=>{this.cafedata=res})

  }

  getuserById(id:number){
    this.spiner.show();
    this.http.get('https://localhost:44376/api/Users/GetUser/'+id).subscribe((response)=>{ this.selectedItem=response
      // if(data){
      //   //debugger
      //   this.selectedItem=data;
      //   this.router.navigate(['client/profile']);
      // }
      console.log(response);
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
      this.toaster.error('Something went worng ,please login again');
      this.router.navigate(['']);
    }
    
    )
  }



  updataprofile(data:any)
  {
    this.spiner.show();

     this.http.put('https://localhost:44376/api/Users/UpdateUser',data).subscribe((result)=>{
     
     this.toaster.success('Trainer Updated');
     this.spiner.hide();
      console.log(data);
    },err=>{
      console.log(err);
      console.log(data);
      this.toaster.error(err);
       })
  }



  deletecustomer(id:number)
  {

     this.http.delete('https://localhost:44334/api/Users/DeleteUsers'+id).subscribe((res:any)=>{this.data=res
    this.toaster.success("Valid") 
      },(err:any)=>{
    
      setTimeout(() => {
        this.toaster.error("invalid")
      }, 20000000000000000000000000);
    })
  }
  ///////////////////////////////////////////////////saleas services

  

//   getallsales()
//   {

    
//     return this.http.get('https://localhost:44376/api/Sales/GetAllSales').subscribe((res)=>{this.salesdata=res
// this.toaster.success("Valid") 
//   },(error:any)=>{this.toaster.error("invalid")})


//   }
  getallsales()
  {

   return this.http.get<any>('https://localhost:44376/api/Sales/GetAllSales').subscribe((res:any)=>{this.salesdata=res
  
  console.log(this.salesdata)})


  }







  getsalesbyid(id:number){
    this.spiner.show();
    this.http.get('https://localhost:44376/api/Sales/salebyid/'+id).subscribe((response)=>{ this.selectsales=response
      // if(data){
      //   //debugger
      //   this.selectedItem=data;
      //   this.router.navigate(['client/profile']);
      // }
      console.log(response);
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
      this.toaster.error('Something went worng ,please login again');
      this.router.navigate(['']);
    }
    
    )
  }

  updateSales(data:any)
  {
    this.spiner.show();

     this.http.put('https://localhost:44383/api/Sales/UpdateSales',data).subscribe((reslut)=>{
     
     this.toaster.success('Trainer Updated');
     this.spiner.hide();
      console.log(data);
    // },err=>{
    //   console.log(err);
    //   console.log(data);
    //   this.toaster.error(err);
      }
     )
  }

  // deletesales(id:number)
  // {

  //    this.http.delete('https://localhost:44334/api/Course/'+id).subscribe((res)=>{this.salesdata=res
  //   this.toaster.success("Valid") 
  //     },(error:any)=>{
    
  //     setTimeout(() => {
  //       this.toaster.error("invalid")
  //     }, 20000000000000000000000000);
  //   })
  // }


getallcaferequest()
{
  return this.http.get<any>('https://localhost:44376/api/CafeRequest/GetCafe').subscribe((res:any)=>{this.caferequest=res
  
  console.log(this.caferequest)})

}




getalldeliveryrequest()
{
  return this.http.get<any>('https://localhost:44376/api/DeliveryRequest/alldelver').subscribe((res:any)=>{this.delivryrequest=res
  
  console.log(this.delivryrequest)})

}


deletecaferequest(id:number)
{
 

  { 
    this.spiner.show();
    debugger
      this.http.delete('https://localhost:44376/api/CafeRequest/DeleteCafeRequest/'+id).subscribe((date:any)=>{
      console.log(date)
        this.toaster.success('Deleted!!')
        this.spiner.hide();
      },err =>{
        this.spiner.hide();
        this.toaster.error('Somthing wrong!!')
      })
    }



    
  }




deletedeliverrequest(id:number)
{

  { 
    this.spiner.show();
    debugger
      this.http.delete('https://localhost:44376/api/DeliveryRequest/DeleteDeliveryRequest/'+id).subscribe((date:any)=>{
      console.log(date)
        this.toaster.success('Deleted!!')
        this.spiner.hide();
      },err =>{
        this.spiner.hide();
        this.toaster.error('Somthing wrong!!')
      })
    }


 
}


deleteuser(id:number)
{

  { 
    this.spiner.show();
    debugger
      this.http.delete('https://localhost:44376/api/Users/DeleteUsers/'+id).subscribe((date:any)=>{
      console.log(date)
        this.toaster.success('Deleted!!')
        this.spiner.hide();
      },err =>{
        this.spiner.hide();
        this.toaster.error('Somthing wrong!!')
      })
    }


 
}

accepetCafeRequest(id:number)
{
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44376/api/CafeRequest/cafe/'+id,requestOptions).subscribe((res:any)=>{
  this.toaster.success('Created');
 // this.router.navigate([])login page 
  this.spiner.hide();
  },err=>{
    
    this.spiner.hide();
    this.toaster.error('Somthing want worning ');
  }
  
  )


  
  
}



accepetdeliverRequest(id:number)
{
  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44376/api/DeliveryRequest/deliver/'+id,requestOptions).subscribe((res:any)=>{
  this.toaster.success('Created');
 // this.router.navigate([])login page 
  this.spiner.hide();
  },err=>{
    
    this.spiner.hide();
    this.toaster.error('Somthing want worning ');
  }
  
  )


  
  
}


getalltestmonial()
{
  return this.http.get<any>('https://localhost:44376/api/TestiMonial/GetAllTestMonial').subscribe((res:any)=>{this.testmonial=res
  
  console.log(this.testmonial)})

}

deletetestmonial(id:number)
{


  { 
    this.spiner.show();
    debugger
      this.http.delete('https://localhost:44376/api/TestiMonial/DeleteTestMonial/'+id).subscribe((date:any)=>{
      console.log(date)
        this.toaster.success('Deleted!!')
        this.spiner.hide();
      },err =>{
        this.spiner.hide();
        this.toaster.error('Somthing wrong!!')
      })
    }



}


}