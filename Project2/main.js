// vehicle class
class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  // car class
  class Car extends Vehicle {
    constructor(name, manufacturer, id, carType) {
      super(name, manufacturer, id);
      this.carType = carType;
    }
  }
  
  // Airplan
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, airplaneType) {
      super(name, manufacturer, id);
      this.airplaneType = airplaneType;
    }
  }
  
  // Employee
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  // driver class
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // Pilot class
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // Reservations
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  // إنشاء مصفوفة لتخزين الحجوزات
  let reservationsArray = [];
  
  // إنشاء ثلاثة سيارات وطائرتين
  let car1 = new Car("Correla", "Manufacturer1", 1, "Gas");
  let car2 = new Car("Yars", "Manufacturer2", 2, "Electric");
  let car3 = new Car("RAV4", "Manufacturer3", 3, "Gas");
  
  let airplane1 = new Airplane("Tomo", "Manufacturer4", 4, "Type1");
  let airplane2 = new Airplane("Holy", "Manufacturer5", 5, "Type2");
  
  // إنشاء دالة للتحقق والحجز
  function makeReservation(employeeId, vehicleId) {
    let employee = reservationsArray.find((res) => res.employeeId === employeeId);
    if (employee && employee.vehicleId !== vehicleId) {
      console.log("لا يتوافق الموظف مع المركبة.");
    } else {
      let reservation = new Reservation(new Date(), employeeId, vehicleId, reservationsArray.length + 1);
      reservationsArray.push(reservation);
      console.log("تم إنشاء الحجز بنجاح.");
    }
  }
  
  // إجراء حجز باستخدام الدالة
  makeReservation(1, 1); 
  makeReservation(2, 1); 
  
  // طباعة محتوى المصفوفة باستخدام دالة map
  reservationsArray.map((reservation) => console.log(reservation));
  