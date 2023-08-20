export const step1Message = {
    step1idCard: {
      required: "กรุณาระบุ รหัสบัตรประชาชน",
      maxlength: "รหัสบัตรประชาชน ไม่ถูกต้อง",
      minlength: "รหัสบัตรประชาชน ไม่ถูกต้อง"
    },
    step1prefix: {
      required: "กรุณาระบุ คำนำหน้าชื่อ",
      maxlength: "คำนำหน้าชื่อ ไม่ถูกต้อง",
    },
    step1prefixOther: {
      required: 'กรุณาระบุ คำนำหน้าชื่อ',
      maxlength: "อื่นๆ ระบุ ไม่ถูกต้อง",
    },
    step1firstNameThai: {
      required: "กรุณาระบุ ชื่อ(ไทย)",
      maxlength: "ชื่อ(ไทย) ไม่ถูกต้อง",
    },
    step1lastNameThai: {
      required: "กรุณาระบุ นามสกุล(ไทย)",
      maxlength: "นามสกุล(ไทย) ไม่ถูกต้อง",
    },
    step1firstNameEnglish: {
      required: "กรุณาระบุ ชื่ออังกฤษ",
      maxlength: "ชื่อ(อังกฤษ) ไม่ถูกต้อง",
    },
    step1lastNameEnglish: {
      required: "กรุณาระบุ นามสกุลอังกฤษ",
      maxlength: "นามสกุล(อังกฤษ) ไม่ถูกต้อง",
    },
    step1nickname: {
      maxlength: "ชื่อเล่น ไม่ถูกต้อง",
    },
    step1dayOfBirth: {
      required: "กรุณาระบุ วันเกิด",
    },
    step1dateOfBirth: {
      required: "กรุณาระบุ เดือน-วัน/เดือน/ปีเกิด",
    },
    step1expireDateCard: {
      required: "กรุณาระบุ บัตรหมดอายุ",
    },
    step1nationality: {
      required: "กรุณาระบุ สัญชาติ",
      maxlength: "สัญชาติ ไม่ถูกต้อง",
    },
    step1familyStatus: {
      required: "กรุณาระบุ สถานภาพทางครอบครัว",
      maxlength: "สถานภาพทางครอบครัว ไม่ถูกต้อง",
    },
    step1numberOfChild: {
      // required: "กรุณาระบุ จำนวน",
      // required: "จำนวนบุตร/ธิดา มี/ไม่มี ไม่ถูกต้อง",
      required: "กรุณาระบุ จำนวนบุตร/ธิดา",
      maxlength: "จำนวนบุตร/ธิดา มี/ไม่มี ไม่ถูกต้อง",
    },
    step1childCount: {
      required: 'กรุณาระบุ จำนวน',
    },
    step1phoneNumber: {
      required: "กรุณาระบุ โทรศัพท์มือถือ",
      minlength: "เบอร์โทรศัพท์มือถือไม่ครบถ้วน",
      maxlength: "เบอร์โทรศัพท์มือถือไม่ครบถ้วน",
    },
    step1mail: {
      maxlength: "อีเมล ไม่ถูกต้อง",
    },
    step1mailProvider: {
    },
    step1otherMail:{
      required: 'กรุณาระบุ ที่อยู่อีเมล'
    },
  };
  
  export const step2Message = {
    homeAddress: {
      required: "กรุณาระบุ ที่อยู่",
    },
    step2periodOfResidenceYear: {
      // required: "กรุณาระบุ ระยะเวลาที่อยู่ - ปี",
      required: "กรุณาระบุ ระยะเวลาที่อยู่อาศัย",
    },
    step2periodOfResidenceMonth: {
      // required: "กรุณาระบุ ระยะเวลาที่อยู่ - เดือน",
      required: "กรุณาระบุ ระยะเวลาที่อยู่อาศัย",
      // max: "ระยะเวลาที่อยู่ - เดือน ไม่ถูกต้อง",
      max: "กรุณาระบุเดือนในช่วง 0 - 11",
    },
    step2numberOfResident: {
      // required: "กรุณาระบุ จำนวนผู้พักอาศัย",
      required: "กรุณาระบุ จำนวน",
    },
  };
  
  export const step2ModalMessage = {
    step2housingType: {
      required: "กรุณาระบุ ประเภทที่อยู่อาศัย",
    },
    step2village: {
      maxlength: "หมู่บ้าน ไม่ถูกต้อง",
    },
    step2building: {
      maxlength: "อาคาร ไม่ถูกต้อง",
    },
    step2number: {
      required: "กรุณาระบุ เลขที่",
      maxlength: "เลขที่ ไม่ถูกต้อง",
    },
    step2roomNumber: {
      maxlength: "ห้องเลขที่ ไม่ถูกต้อง",
    },
    step2floor: {
      maxlength: "ชั้น ระบุ ไม่ถูกต้อง",
    },
    step2group: {
      maxlength: "หมู่ที่ ระบุ ไม่ถูกต้อง",
    },
    step2alley: {
      maxlength: "ตรอก/ซอย ระบุ ไม่ถูกต้อง",
    },
    step2road: {
      maxlength: "ถนน ระบุ ไม่ถูกต้อง",
    },
    step2postcode: {
      required: "กรุณาระบุ รหัสไปรษณีย์",
      maxlength: "รหัสไปรษณีย์ ระบุ ไม่ถูกต้อง",
    },
    step2subdistrict: {
      required: "กรุณาระบุ ตำบล/แขวง",
    },
    step2district: {
      required: "กรุณาระบุ อำเภอ/เขต",
    },
    step2province: {
      required: "กรุณาระบุ จังหวัด",
    },
    step2phoneHouse: {
        minlength:  "โทรศัพท์บ้านไม่ครบถ้วน",
        maxlength:  "โทรศัพท์บ้านไม่ครบถ้วน",
    },
  };
  
  export const step3Message = {
    step3convenientPeriod: {
    },
    step3businessType: {
      required: "กรุณาระบุ ประเภทธุรกิจ",
    },
    step3numberOfEmployee: {
      required: "กรุณาระบุ จำนวน",
    },
    step3department: {
      required: "กรุณาระบุ แผนก/ฝ่าย",
    },
    step3postion: {
      required: "กรุณาระบุ ตำแหน่ง",
    },
    step3workType: {
      required: "กรุณาระบุ ลักษณะงาน",
    },
    step3employmentCondition: {
      required: "กรุณาระบุ สภาพการจ้างงาน",
    },
    step3salary: {
      required: "กรุณาระบุ รายได้ต่อเดือน",
      min: "ผู้สมัครต้องมีรายได้ 7,000 บาทขึ้นไป",
    },
    step3periodOfWorkYear: {
      required: "กรุณาระบุ อายุการทำงาน",
    },
    step3periodOfWorkMonth: {
      required: "กรุณาระบุ ระยะเวลา - เดือน",
      max: "กรุณาระบุเดือนในช่วง 0 - 11",
      // max: "ระยะเวลาที่อยู่ - เดือน ไม่ถูกต้อง",
    },
    step3incomeType: {
      required: "กรุณาระบุ วิธีการรับเงินเดือน",
    },
    step3incomeCount: {
      required: "กรุณาระบุ รับเงินเดือน เดือนละ",
    },
    step3incomeDay: {
      required: "กรุณาระบุ วันที่รับเงินเดือน",
    },
    step3managerFirstName: {
      required: "กรุณาระบุ  ชื่อ",
    },
    step3managerLastName: {
      required: "กรุณาระบุ  นามสกุล",
    },
    step3managerPosition: {
      required: "กรุณาระบุ  ตำแหน่ง",
    },
    step3managerPhoneNumber: {
      required: "กรุณาระบุ โทรศัพท์",
      minlength: "เบอร์โทรศัพท์ไม่ครบถ้วน",
      maxlength: "โทรศัพท์หัวหน้า ไม่ถูกต้อง",
    },
    step3managerPhoneNumber2: {
    },
  };
  
  export const step3ModalMessage = {
    step3company: {
      required: "กรุณาระบุ ชื่อบริษัท",
    },
    step3branch: {
    },
    step3village: {
    },
    step3building: {
    },
    step3number: {
      required: "กรุณาระบุ เลขที่",
    },
    step3roomNumber: {
    },
    step3floor: {
    },
    step3group: {
    },
    step3alley: {
    },
    step3road: {
    },
    step3postcode: {
      required: "กรุณาระบุ รหัสไปรษณีย์",
    },
    step3subdistrict: {
      required: "กรุณาระบุ ตำบล/แขวง",
    },
    step3district: {
      required: "กรุณาระบุ อำเภอ/เขต",
    },
    step3province: {
      required: "กรุณาระบุ จังหวัด",
    },
    step3companyPhone: {
      required: "กรุณาระบุ โทรศัพท์ (สำนักงานใหญ่) แต่ในกรณีที่ไม่ทราบสามารถใส่เครื่องหมาย – ได้",
      minlength: "กรุณาระบุ โทรศัพท์ (สำนักงานใหญ่) หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
      maxlength: "กรุณาระบุ โทรศัพท์ (สำนักงานใหญ่) หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
      allowAllPhone: "เบอร์โทรศัพท์ไม่ถูกต้อง หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
    },
    step3branchPhone: {
      required: "กรุณาระบุ โทรศัพท์ (สถานที่ประจำ) แต่ในกรณีที่ไม่ทราบสามารถใส่เครื่องหมาย – ได้",
      minlength: "กรุณาระบุ โทรศัพท์ (สถานที่ประจำ) หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
      maxlength: "กรุณาระบุ โทรศัพท์ (สถานที่ประจำ) หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
      allowAllPhone: "เบอร์โทรศัพท์ไม่ถูกต้อง หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
    },
    step3phone: {
      required: "กรุณาระบุ โทรศัพท์มือถือ (ที่ทำงาน) แต่ในกรณีที่ไม่ทราบสามารถใส่เครื่องหมาย – ได้",
      minlength:  "กรุณาระบุ โทรศัพท์มือถือ (ที่ทำงาน) หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
      maxlength:  "กรุณาระบุ โทรศัพท์มือถือ (ที่ทำงาน) หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
      phonePattern: "เบอร์โทรศัพท์มือถือที่ทำงานต้องขึ้นต้นด้วย 05/06/08/09 หรือถ้าไม่มีให้ใส่ - ",
    },
    step3phone2: {
      phoneHomePattern: "เบอร์โทรศัพท์ไม่ถูกต้อง หรือหากไม่มีกรุณาใส่เครื่องหมาย - ",
    },
  };
  
  export const step4Message = {
    step4contactFirstName1: {
      required: "กรุณาระบุ ชื่อ",
    },
    step4contactLastName1: {
      required: "กรุณาระบุ นามสกุล",
    },
    step4contactRelation1: {
      required: "กรุณาระบุ ความสัมพันธ์",
    },
    step4contactPhone1: {
      required: "กรุณาระบุ โทรศัพท์",
      // minlength: "โทรศัพท์ ไม่ถูกต้อง",
      maxlength: "โทรศัพท์ ไม่ถูกต้อง",
    },
    step4contactFirstName2: {
    },
    step4contactLastName2: {
    },
    step4contactRelation2: {
    },
    step4contactPhone2: {
        minlength: "โทรศัพท์ ไม่ถูกต้อง",
        maxlength: "โทรศัพท์ ไม่ถูกต้อง",
    },
    step4source: {
      required: "กรุณาระบุ ช่องทาง",
    },
    step4friendFromUmay: {
      required: "กรุณาระบุ ท่านรู้จักยูเมะพลัสจากสื่อใด",
    },
    step4recommenderFirstName: {
      required: 'กรุณาระบุ ชื่อ ผู้แนะนำ',
    },
    step4recommenderLastName: {
      required: 'กรุณาระบุ นามสกุล ผู้แนะนำ',
    },
    step4recommenderPhone: {
      required: 'กรุณาระบุ โทรศัพท์ ผู้แนะนำ',
      minlength: "โทรศัพท์มือถือ ไม่ถูกต้อง",
      maxlength: "โทรศัพท์มือถือ ไม่ถูกต้อง",
    },
    step4otherSource: {
      required: 'กรุณาระบุ รู้จักยูเมะพลัสจากสื่อใด',
    },
    step4otherSourceInfo: {
    },
    step4otherSourceDetail: {
    },
    step4highRankRelation: {
      required: "กรุณาระบุ ความสัมพันธ์กับบุคคลที่มีสถานภาพทางการเมือง",
    },
    step4highRankRelationFirstName: {
      required: 'กรุณาระบุ ชื่อ',
    },
    step4highRankRelationLastName: {
      required: 'กรุณาระบุ นามสกุล',
    },
    step4highRankRelationPosition: {
      required: 'กรุณาระบุ ตำแหน่ง',
    },
    step4highRankRelationRelation: {
      required: 'กรุณาระบุ ความสัมพันธ์',
    },
    step4credit: {
      required: "กรุณาระบุ หนังสือยินยอมเปิดเผยข้อมูลสินเชื่อส่วนบุคคลภายใต้การกำกับ",
    },
    step4creditCount: {
      required: 'กรุณาระบุ จำนวน',
    },
    step4creditAmount: {
      required: 'กรุณาระบุ วงเงินอนุมัติรวม',
    },
    step4paymentType: {
      required: "กรุณาระบุ วิธีการชำระเงิน",
    },
    step4paymentDate: {
      required: 'กรุณาระบุ วันที่หักเงินในบัญชี',
    },
    step4paymentWeekend: {
      required: 'กรุณาระบุ วิธีหักเงินจากวันที่รับเงินเดือน',
    },
    step4promtpay: {
      required: "กรุณาระบุ บริการโอนเงินเข้าบัญชีพร้อมเพย์",
    },
    step4promtpayAmount: {
      required: 'กรุณาระบุ โอนเงินครั้งแรกจำนวน',
    },
    step4addressType: {
      required: 'กรุณาระบุ สถานที่ส่งเอกสาร',
    },
    step4StatementMail: {
      required: 'กรุณาระบุ อีเมล',
    },
    step4StatementMailProvider: {
    },
    step4termAndConditionMail:{
      required: "กรุณาอ่านรายละเอียดข้อตกลงและเงื่อนไขการใช้บริการ และเลือกยอมรับ"
    }, 
    step4promotion: {
      required: "กรุณาระบุ โปรโมชันเบิกถอนเงินสดครั้งแรก",
    },
    step4promotionAddress: {
      required: "กรุณาระบุ สถานที่ส่งของสัมนาคุณ",
    },
    step4termAndCondition: {
      required: "กรุณาอ่านรายละเอียดที่ให้ไว้ในใบสมัคร/สัญญานี้ และเลือกยินยอม",
    },
  }

  export const step5Message = {
    step5termOfConditionCredit: {
      required: "กรุณาระบุ หนังสือยินยอมในการนำข้อมูลที่ได้รับจากบริษัทข้อมูลเครดิต",
    },
    step5termOfConditionBank: {
      required: "กรุณาระบุ หนังสือยินยอมให้หักบัญชีเงินฝากธนาคาร ยินยอม/ไม่ยินยอม",
    },
    step5bank: {
      required: "กรุณาระบุ บัญชีธนาคาร"
    },
    step5bankType: {
      required: "กรุณาระบุ บัญชีเงินฝากประเภท"
    },
    
    step5bankAddress: {
      required: "กรุณาระบุ เลขที่บัญชี"
    },

    step5bankName: {
      required: "กรุณาระบุ ชื่อบัญชี"
    },

    step5bankBranch: {
      required: "กรุณาระบุ สาขา"
    },

    step5phone: {
        minlength: "เบอร์โทรศัพท์ไม่ครบถ้วน",
        maxlength: "เบอร์ติดต่อ ไม่ถูกต้อง",
    },
  }