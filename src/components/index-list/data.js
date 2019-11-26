export const t = {
    "code": 0,
    "data": {
        "policyData": [
            {
                "addModule": false,
                "deleteModule": false,
                "insurePolicyConservationWidgetList": [
                    [
                        {
                            "field": "beginTime",
                            "isHide": false,
                            "label": "起保时间",
                            "type": "input",
                            "value": 1565971200000,
                            "widgetId": 5013
                        },
                        {
                            "field": "endTime",
                            "isHide": false,
                            "label": "终止时间",
                            "type": "input",
                            "value": 3806582400000,
                            "widgetId": 5014
                        },
                        {
                            "field": "planCode",
                            "isHide": false,
                            "label": "计划",
                            "type": "select",
                            "value": [
                                {
                                    "field": "planCode",
                                    "isHide": false,
                                    "label": "保障计划code",
                                    "type": "select",
                                    "value": 1,
                                    "widgetId": 5016
                                },
                                {
                                    "field": "planName",
                                    "isHide": false,
                                    "label": "保障计划名称",
                                    "type": "select",
                                    "value": 1,
                                    "widgetId": 5016
                                }
                            ],
                            "widgetId": 5016
                        },
                        {
                            "field": "insuranceTerm",
                            "isHide": false,
                            "label": "保障期间",
                            "type": "select",
                            "value": "100O",
                            "widgetId": 5017
                        },
                        {
                            "field": "payTerm",
                            "isHide": false,
                            "label": "交费年期",
                            "type": "select",
                            "value": "30Y",
                            "widgetId": 5018
                        },
                        {
                            "field": "obtainTerm",
                            "isHide": false,
                            "label": "领取期间",
                            "type": "select",
                            "value": "nullnull",
                            "widgetId": 5019
                        },
                        {
                            "field": "applyQuantity",
                            "isHide": false,
                            "label": "投保份数",
                            "type": "input",
                            "value": 1,
                            "widgetId": 5020
                        },
                        {
                            "field": "riskCode",
                            "isHide": true,
                            "label": "险种code",
                            "type": "input",
                            "value": "1039"
                        },
                        {
                            "field": "isMain",
                            "isHide": true,
                            "label": "是否为主险",
                            "type": "input",
                            "value": 1
                        }
                    ],
                ],
                "key": "insurancePlan",
                "moduleId": 5003,
                "name": "保障计划",
                "orderTag": 1,
                "productId": 100954
            },
            {
                "addModule": false,
                "deleteModule": false,
                "insurePolicyConservationWidgetList": [
                    [
                        {
                            "field": "name",
                            "isHide": false,
                            "label": "姓名",
                            "type": "input",
                            "value": "李飞一",
                            "widgetId": 2
                        },
                        {
                            "field": "idType",
                            "isHide": false,
                            "label": "证件类型",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 3
                        },
                        {
                            "field": "idNo",
                            "isHide": false,
                            "label": "证件号码",
                            "type": "String",
                            "value": "11010119900207001X",
                            "widgetId": 3
                        },
                        {
                            "field": "sex",
                            "isHide": false,
                            "label": "性别",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 3
                        },
                        {
                            "field": "birthday",
                            "isHide": false,
                            "label": "生日",
                            "type": "String",
                            "value": "1990-02-07",
                            "widgetId": 3
                        },
                        {
                            "field": "mobile",
                            "isHide": false,
                            "label": "手机号",
                            "type": "input",
                            "value": "19904520103",
                            "widgetId": 4
                        },
                        {
                            "field": "email",
                            "isHide": false,
                            "label": "邮箱",
                            "type": "input",
                            "value": "443324@qq.com",
                            "widgetId": 5
                        },
                        {
                            "field": "job",
                            "isHide": false,
                            "label": "职业列表",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "jobCode",
                                    "isHide": false,
                                    "label": "职业代码",
                                    "type": "composite",
                                    "value": "1010001",
                                    "widgetId": 6
                                },
                                {
                                    "field": "jobType",
                                    "isHide": false,
                                    "label": "职业类别",
                                    "type": "composite",
                                    "value": "1010001",
                                    "widgetId": 6
                                },
                                {
                                    "field": "jobName",
                                    "isHide": false,
                                    "label": "职业名称",
                                    "type": "composite",
                                    "value": "测试名称",
                                    "widgetId": 6
                                }
                            ],
                            "widgetId": 6
                        },
                        {
                            "field": "district",
                            "isHide": false,
                            "label": "所在地区",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "province",
                                    "isHide": false,
                                    "label": "省份",
                                    "type": "composite",
                                    "value": "130000",
                                    "widgetId": 7
                                },
                                {
                                    "field": "city",
                                    "isHide": false,
                                    "label": "城市",
                                    "type": "composite",
                                    "value": "130100",
                                    "widgetId": 7
                                },
                                {
                                    "field": "district",
                                    "isHide": false,
                                    "label": "地区",
                                    "type": "composite",
                                    "value": "130102",
                                    "widgetId": 7
                                }
                            ],
                            "widgetId": 7
                        },
                        {
                            "field": "address",
                            "isHide": false,
                            "label": "详细地址",
                            "type": "input",
                            "value": "测试地址万塘路788号",
                            "widgetId": 8
                        },
                        {
                            "field": "idValidDate",
                            "isHide": false,
                            "label": "证件有效期",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "idValidDateStartTime",
                                    "isHide": false,
                                    "label": "证件开始时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 4001
                                },
                                {
                                    "field": "idValidDateEndTime",
                                    "isHide": false,
                                    "label": "证件结束时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 4001
                                },
                                {
                                    "field": "idLongTermEffective",
                                    "isHide": false,
                                    "label": "是否长期",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 4001
                                }
                            ],
                            "widgetId": 4001
                        }
                    ]
                ],
                "key": "applicant",
                "moduleId": 2,
                "name": "投保人信息",
                "orderTag": 2,
                "personType": 1,
                "productId": 100954
            },
            {
                "addModule": false,
                "deleteModule": false,
                "insurePolicyConservationWidgetList": [
                    [
                        {
                            "field": "name",
                            "isHide": false,
                            "label": "姓名",
                            "type": "input",
                            "value": "李飞一",
                            "widgetId": 9
                        },
                        {
                            "field": "beneficiaryType",
                            "isHide": true,
                            "label": "受益人类型",
                            "type": "input",
                            "value": 4
                        },
                        {
                            "field": "idType",
                            "isHide": false,
                            "label": "证件类型",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 10
                        },
                        {
                            "field": "idNo",
                            "isHide": false,
                            "label": "证件号码",
                            "type": "String",
                            "value": "11010119900207001X",
                            "widgetId": 10
                        },
                        {
                            "field": "sex",
                            "isHide": false,
                            "label": "性别",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 10
                        },
                        {
                            "field": "birthday",
                            "isHide": false,
                            "label": "生日",
                            "type": "String",
                            "value": "1990-02-07",
                            "widgetId": 10
                        },
                        {
                            "field": "mobile",
                            "isHide": false,
                            "label": "手机号",
                            "type": "input",
                            "value": "19904520103",
                            "widgetId": 11
                        },
                        {
                            "field": "job",
                            "isHide": false,
                            "label": "职业列表",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "jobCode",
                                    "isHide": false,
                                    "label": "职业代码",
                                    "type": "composite",
                                    "value": "1010001",
                                    "widgetId": 13
                                },
                                {
                                    "field": "jobType",
                                    "isHide": false,
                                    "label": "职业类别",
                                    "type": "composite",
                                    "value": "1010001",
                                    "widgetId": 13
                                },
                                {
                                    "field": "jobName",
                                    "isHide": false,
                                    "label": "职业名称",
                                    "type": "composite",
                                    "value": "1010001",
                                    "widgetId": 13
                                }
                            ],
                            "widgetId": 13
                        },
                        {
                            "field": "district",
                            "isHide": false,
                            "label": "所在地区",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "province",
                                    "isHide": false,
                                    "label": "省份",
                                    "type": "composite",
                                    "value": "110000",
                                    "widgetId": 14
                                },
                                {
                                    "field": "city",
                                    "isHide": false,
                                    "label": "城市",
                                    "type": "composite",
                                    "value": "110000",
                                    "widgetId": 14
                                },
                                {
                                    "field": "district",
                                    "isHide": false,
                                    "label": "地区",
                                    "type": "composite",
                                    "value": "110000",
                                    "widgetId": 14
                                }
                            ],
                            "widgetId": 14
                        },
                        {
                            "field": "address",
                            "isHide": false,
                            "label": "详细地址",
                            "type": "input",
                            "value": "测试地址万塘路788号",
                            "widgetId": 15
                        },
                        {
                            "field": "relationToApplicant",
                            "isHide": false,
                            "label": "与投保人关系",
                            "type": "select",
                            "value": 1,
                            "widgetId": 16
                        },
                        {
                            "field": "idValidDate",
                            "isHide": false,
                            "label": "证件有效期",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "idValidDateStartTime",
                                    "isHide": false,
                                    "label": "证件开始时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 4002
                                },
                                {
                                    "field": "idValidDateEndTime",
                                    "isHide": false,
                                    "label": "证件结束时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 4002
                                },
                                {
                                    "field": "idLongTermEffective",
                                    "isHide": false,
                                    "label": "是否长期", // 1代表选中，0-代表未选中
                                    "type": "composite",
                                    "value": 0,
                                    "widgetId": 4002
                                }
                            ],
                            "widgetId": 4002
                        },
                        {
                            "field": "uuid",
                            "isHide": true,
                            "label": "被保人uuid",
                            "type": "input",
                            "value": "f12470c827424e3080a6127b95c5263837"
                        }
                    ],
                    [
                        {
                            "field": "name",
                            "isHide": false,
                            "label": "姓名",
                            "type": "input",
                            "value": "李飞二",
                            "widgetId": 9
                        },
                        {
                            "field": "beneficiaryType",
                            "isHide": true,
                            "label": "受益人类型",
                            "type": "input",
                            "value": 4
                        },
                        {
                            "field": "idType",
                            "isHide": false,
                            "label": "证件类型",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 10
                        },
                        {
                            "field": "idNo",
                            "isHide": false,
                            "label": "证件号码",
                            "type": "String",
                            "value": "11010119900207001X",
                            "widgetId": 10
                        },
                        {
                            "field": "sex",
                            "isHide": false,
                            "label": "性别",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 10
                        },
                        {
                            "field": "birthday",
                            "isHide": false,
                            "label": "生日",
                            "type": "String",
                            "value": "1990-02-07",
                            "widgetId": 10
                        },
                        {
                            "field": "mobile",
                            "isHide": false,
                            "label": "手机号",
                            "type": "input",
                            "value": "19904520103",
                            "widgetId": 11
                        },
                        {
                            "field": "job",
                            "isHide": false,
                            "label": "职业列表",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "jobCode",
                                    "isHide": false,
                                    "label": "职业代码",
                                    "type": "composite",
                                    "value": "1010001",
                                    "widgetId": 13
                                },
                                {
                                    "field": "jobType",
                                    "isHide": false,
                                    "label": "职业类别",
                                    "type": "composite",
                                    "value": "1010001",
                                    "widgetId": 13
                                },
                                {
                                    "field": "jobName",
                                    "isHide": false,
                                    "label": "职业名称",
                                    "type": "composite",
                                    "value": "1010001",
                                    "widgetId": 13
                                }
                            ],
                            "widgetId": 13
                        },
                        {
                            "field": "district",
                            "isHide": false,
                            "label": "所在地区",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "province",
                                    "isHide": false,
                                    "label": "省份",
                                    "type": "composite",
                                    "value": "110000",
                                    "widgetId": 14
                                },
                                {
                                    "field": "city",
                                    "isHide": false,
                                    "label": "城市",
                                    "type": "composite",
                                    "value": "110000",
                                    "widgetId": 14
                                },
                                {
                                    "field": "district",
                                    "isHide": false,
                                    "label": "地区",
                                    "type": "composite",
                                    "value": "110000",
                                    "widgetId": 14
                                }
                            ],
                            "widgetId": 14
                        },
                        {
                            "field": "address",
                            "isHide": false,
                            "label": "详细地址",
                            "type": "input",
                            "value": "测试地址万塘路788号",
                            "widgetId": 15
                        },
                        {
                            "field": "relationToApplicant",
                            "isHide": false,
                            "label": "与投保人关系",
                            "type": "select",
                            "value": 1,
                            "widgetId": 16
                        },
                        {
                            "field": "idValidDate",
                            "isHide": false,
                            "label": "证件有效期",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "idValidDateStartTime",
                                    "isHide": false,
                                    "label": "证件开始时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 4002
                                },
                                {
                                    "field": "idValidDateEndTime",
                                    "isHide": false,
                                    "label": "证件结束时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 4002
                                },
                                {
                                    "field": "idLongTermEffective",
                                    "isHide": false,
                                    "label": "是否长期",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 4002
                                }
                            ],
                            "widgetId": 4002
                        },
                        {
                            "field": "uuid",
                            "isHide": true,
                            "label": "被保人uuid",
                            "type": "input",
                            "value": "f23c70c827424e3080a6127b95c5263837"
                        }
                    ]
                ],
                "key": "insured",
                "moduleId": 3,
                "name": "被保险人信息",
                "orderTag": 3,
                "personType": 2,
                "productId": 100954
            },
            {
                "addModule": true,
                "deleteModule": true,
                "insurePolicyConservationWidgetList": [
                    [
                        {
                            "field": "relationToInsured",
                            "isHide": false,
                            "label": "与被保人关系",
                            "type": "select",
                            "value": 11,
                            "widgetId": 5001
                        },
                        {
                            "field": "sort",
                            "isHide": false,
                            "label": "受益顺序",
                            "type": "select",
                            "value": 1,
                            "widgetId": 5002
                        },
                        {
                            "field": "beneficiaryType",
                            "isHide": true,
                            "label": "受益人类型",
                            "type": "input",
                            "value": 4
                        },
                        {
                            "field": "scale",
                            "isHide": false,
                            "label": "受益比例",
                            "type": "input",
                            "value": 50,
                            "widgetId": 5003
                        },
                        {
                            "field": "name",
                            "isHide": false,
                            "label": "姓名",
                            "type": "input",
                            "value": "发发发",
                            "widgetId": 5004
                        },
                        {
                            "field": "idType",
                            "isHide": false,
                            "label": "证件类型",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 5005
                        },
                        {
                            "field": "idNo",
                            "isHide": false,
                            "label": "证件号码",
                            "type": "String",
                            "value": "110101193808170055",
                            "widgetId": 5005
                        },
                        {
                            "field": "sex",
                            "isHide": false,
                            "label": "性别",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 5005
                        },
                        {
                            "field": "birthday",
                            "isHide": false,
                            "label": "生日",
                            "type": "String",
                            "value": "1938-08-17",
                            "widgetId": 5005
                        },
                        {
                            "field": "idValidDate",
                            "isHide": false,
                            "label": "证件有效期",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "idValidDateStartTime",
                                    "isHide": false,
                                    "label": "证件开始时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 5006
                                },
                                {
                                    "field": "idValidDateEndTime",
                                    "isHide": false,
                                    "label": "证件结束时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 5006
                                },
                                {
                                    "field": "idLongTermEffective",
                                    "isHide": false,
                                    "label": "是否长期",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 5006
                                }
                            ],
                            "widgetId": 5006
                        },
                        {
                            "field": "uuid",
                            "isHide": true,
                            "label": "受益人uuid",
                            "type": "input",
                            "value": "f9e28cfad2f941428caca8ba05a6f74537"
                        },
                        {
                            "field": "beneficiaryType",
                            "isHide": true,
                            "label": "受益人类型",
                            "type": "input",
                            "value": 4
                        },
                        {
                            "field": "insuredUuid",
                            "isHide": true,
                            "label": "被保人uuid",
                            "type": "input",
                            "value": "f12470c827424e3080a6127b95c5263837"
                        }
                    ],
                    [
                        {
                            "field": "relationToInsured",
                            "isHide": false,
                            "label": "与被保人关系",
                            "type": "select",
                            "value": 2,
                            "widgetId": 5001
                        },
                        {
                            "field": "sort",
                            "isHide": false,
                            "label": "受益顺序",
                            "type": "select",
                            "value": 1,
                            "widgetId": 5002
                        },
                        {
                            "field": "scale",
                            "isHide": false,
                            "label": "受益比例",
                            "type": "input",
                            "value": 50,
                            "widgetId": 5003
                        },
                        {
                            "field": "name",
                            "isHide": false,
                            "label": "姓名",
                            "type": "input",
                            "value": "辅导费",
                            "widgetId": 5004
                        },
                        {
                            "field": "idType",
                            "isHide": false,
                            "label": "证件类型",
                            "type": "Integer",
                            "value": 1,
                            "widgetId": 5005
                        },
                        {
                            "field": "idNo",
                            "isHide": false,
                            "label": "证件号码",
                            "type": "String",
                            "value": "11010119380817016X",
                            "widgetId": 5005
                        },
                        {
                            "field": "sex",
                            "isHide": false,
                            "label": "性别",
                            "type": "Integer",
                            "value": 2,
                            "widgetId": 5005
                        },
                        {
                            "field": "birthday",
                            "isHide": false,
                            "label": "生日",
                            "type": "String",
                            "value": "1938-08-17",
                            "widgetId": 5005
                        },
                        {
                            "field": "idValidDate",
                            "isHide": false,
                            "label": "证件有效期",
                            "type": "composite",
                            "value": [
                                {
                                    "field": "idValidDateStartTime",
                                    "isHide": false,
                                    "label": "证件开始时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 5006
                                },
                                {
                                    "field": "idValidDateEndTime",
                                    "isHide": false,
                                    "label": "证件结束时间",
                                    "type": "composite",
                                    "value": 1565884800000,
                                    "widgetId": 5006
                                },
                                {
                                    "field": "idLongTermEffective",
                                    "isHide": false,
                                    "label": "是否长期",
                                    "type": "composite",
                                    "value": 0,
                                    "widgetId": 5006
                                }
                            ],
                            "widgetId": 5006
                        },
                        {
                            "field": "uuid",
                            "isHide": true,
                            "label": "受益人uuid",
                            "type": "input",
                            "value": "1f484cffad154188b0d236f2428f452a37"
                        },
                        {
                            "field": "insuredUuid",
                            "isHide": true,
                            "label": "被保人uuid",
                            "type": "input",
                            "value": "f12470c827424e3080a6127b95c5263837"
                        }
                    ]
                ],
                "key": "beneficiary",
                "moduleId": 5001,
                "name": "受益人信息",
                "orderTag": 7,
                "personType": 3,
                "productId": 100954
            },
            {
                "addModule": false,
                "deleteModule": false,
                "insurePolicyConservationWidgetList": [
                    [
                        {
                            "field": "bank",
                            "isHide": false,
                            "label": "开户银行",
                            "type": "select",
                            "value": [
                                {
                                    "field": "payRenewalBankCode",
                                    "isHide": false,
                                    "label": "银行代码",
                                    "type": "select",
                                    "value": "01",
                                    "widgetId": 5009
                                },
                                {
                                    "field": "payRenewalBankName",
                                    "isHide": false,
                                    "label": "银行名称",
                                    "type": "select",
                                    "value": "01",
                                    "widgetId": 5009
                                }
                            ],
                            "widgetId": 5009
                        },
                        {
                            "field": "payRenewalAcctNo",
                            "isHide": false,
                            "label": "开户卡号",
                            "type": "input",
                            "value": "6212261202020365211",
                            "widgetId": 5010
                        },
                        {
                            "field": "payRenewalAcctMobile",
                            "isHide": false,
                            "label": "开户行预留手机号",
                            "type": "input",
                            "value": "19904520103",
                            "widgetId": 5012
                        },
                        {
                            "field": "payRenewalAcctName",
                            "isHide": true,
                            "label": "开户姓名",
                            "type": "input",
                            "value": "李飞二"
                        },
                        {
                            "field": "payRenewalAcctIdNo",
                            "isHide": true,
                            "label": "身份证号",
                            "type": "input",
                            "value": "11010119900207001X"
                        }
                    ]
                ],
                "key": "renewalBank",
                "moduleId": 5002,
                "name": "续期银行卡信息",
                "orderTag": 8,
                "productId": 100954
            }
        ],
        "status": 0
    },
    "msg": "成功"
}
