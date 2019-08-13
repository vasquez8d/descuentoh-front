export class ProjectDashboardDb
{
    public static projects = [
        {
            'name': 'ACME Corp. Backend App'
        },
        {
            'name': 'ACME Corp. Frontend App'
        },
        {
            'name': 'Creapond'
        },
        {
            'name': 'Withinpixels'
        }
    ];

    public static widgets = {
        'widget5'      : {
            'title'     : 'Avance de tratamiento anual',
            'ranges'    : {                                                
                'NV': 'Noviembre',
                'DC': 'Diciembre',
                'EN': 'Enero',
                'FB': 'Febrero'
            },
            'mainChart' : {
                'NV': [
                    {
                        'name'  : 'Semana-1',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 26
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 14
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 16
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 5
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 2
                            }                            
                        ]
                    },
                    {
                        'name'  : 'Semana-2',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 24
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 17
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 16
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 6
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 1
                            }                           
                        ]
                    },
                    {
                        'name'  : 'Semana-3',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 21
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 20
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 16
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 6
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 1
                            }                            
                        ]
                    },
                    {
                        'name'  : 'Semana-4',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 23
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 18
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 16
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 5
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 2
                            }                            
                        ]
                    }
                ],
                'DC': [
                    {
                        'name'  : 'Semana-1',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 23
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 18
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 16
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 3
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 4
                            }                            
                        ]
                    },
                    {
                        'name'  : 'Semana-2',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 23
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 22
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 12
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 4
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 3
                            }                           
                        ]
                    },
                    {
                        'name'  : 'Semana-3',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 24
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 22
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 11
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 5
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 2
                            }                            
                        ]
                    },
                    {
                        'name'  : 'Semana-4',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 25
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 22
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 10
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 5
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 2
                            }                            
                        ]
                    }
                ],
                'EN': [
                    {
                        'name'  : 'Semana-1',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 25
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 22
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 10
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 5
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 2
                            }                            
                        ]
                    },
                    {
                        'name'  : 'Semana-2',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 26
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 18
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 15
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 2
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 3
                            }                            
                        ]
                    },
                    {
                        'name'  : 'Semana-3',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 28
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 14
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 15
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 5
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 2
                            }                            
                        ]
                    },
                    {
                        'name'  : 'Semana-4',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 31
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 19
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 12
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 4
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 1
                            }                            
                        ]
                    }
                ],
                'FB': [
                    {
                        'name'  : 'Semana-1',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 32
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 13
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 10
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 5
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 2
                            }                            
                        ]
                    },
                    {
                        'name'  : 'Semana-2',
                        'series': [
                            {
                                'name' : 'Niños sanos',
                                'value': 34
                            },
                            {
                                'name' : 'Niños en riesgo',
                                'value': 12
                            },
                            {
                                'name' : 'Niños con anemia leve',
                                'value': 12
                            },
                            {
                                'name' : 'Niños con anemia moderada',
                                'value': 2
                            },
                            {
                                'name' : 'Niños con anemia severa',
                                'value': 2
                            }                            
                        ]
                    }
                ],
            },
            'supporting': {
                'created'  : {
                    'label': 'Grupo etareo desde 0 hasta 6 meses',
                    'count': {
                        'NV': 22,
                        'DC': 25,                        
                        'EN': 27,
                        'FB': 30
                    },
                    'chart': {
                        'DC': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 6
                                    }
                                ]
                            }
                        ],
                        'NV': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'EN': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'FB': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 10
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 3
                                    }
                                ]
                            }
                        ]
                    }
                },
                'closed'   : {
                    'label': 'Grupo etareo desde 6 meses cumplidos hasta menos de 3 años',
                    'count': {
                        'NV': 15,
                        'DC': 16,                        
                        'EN': 14,
                        'FB': 18
                    },
                    'chart': {
                        'DC': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 6
                                    }
                                ]
                            }
                        ],
                        'NV': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'EN': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'FB': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 10
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 3
                                    }
                                ]
                            }
                        ]
                    }
                },
                'reOpened' : {
                    'label': 'Grupo etareo desde 3 años hasta menor de 5 años',
                    'count': {
                        'NV': 19,
                        'DC': 21,                        
                        'EN': 17,
                        'FB': 14
                    },
                    'chart': {
                        'DC': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 6
                                    }
                                ]
                            }
                        ],
                        'NV': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'EN': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'FB': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 10
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 3
                                    }
                                ]
                            }
                        ]
                    }
                },
                'wontFix'  : {
                    'label': 'Estas debajo, en el o encima del promedio',
                    'count': {
                        'NV': 13,
                        'DC': 12,                        
                        'EN': 10,
                        'FB': 8
                    },
                    'chart': {
                        'DC': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 6
                                    }
                                ]
                            }
                        ],
                        'NV': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'EN': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'FB': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 10
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 3
                                    }
                                ]
                            }
                        ]
                    }
                },                
                'con-anemia'  : {
                    'label': 'Niños con anemia (%)',
                    'count': {
                        'NV': 30,
                        'DC': 29,                        
                        'EN': 22,
                        'FB': 18
                    },
                    'chart': {
                        'DC': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 6
                                    }
                                ]
                            }
                        ],
                        'NV': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'EN': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'FB': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 10
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 3
                                    }
                                ]
                            }
                        ]
                    }
                },                
                'con-tratamiento'  : {
                    'label': 'Niños en tratamiento (%)',
                    'count': {
                        'NV': 70,
                        'DC': 73,                        
                        'EN': 75,
                        'FB': 80
                    },
                    'chart': {
                        'DC': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 6
                                    }
                                ]
                            }
                        ],
                        'NV': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'EN': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 9
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'FB': [
                            {
                                'name'  : 'Niños',
                                'series': [
                                    {
                                        'name' : 'Semana-1',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Semana-2',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Semana-3',
                                        'value': 10
                                    },
                                    {
                                        'name' : 'Semana-4',
                                        'value': 3
                                    }
                                ]
                            }
                        ]
                    }
                },
                
            }
        },
        'widget6'      : {
            'title'      : 'Task Distribution',
            'ranges'     : {
                'FB': 'Febrero',
                'EN': 'Enero',
                'DC': 'Diciembre',
                'NV': 'Noviembre',
            },
            'mainChart'  : {
                'FB': [
                    {
                        'name' : 'Niños tratados',
                        'value': 72
                    },
                    {
                        'name' : 'Niños no tratados',
                        'value': 17
                    },
                    {
                        'name' : 'Niños recuperados completos (un niño recuperado es aquel que tenga mas de 11 en hemoglobina + 6 suplementaciones)',
                        'value': 42
                    },
                    {
                        'name' : 'Niños recuperados Incompletos (un niño como hemoglobina mayor o = 11 sin cumplir sus 6 suplementaciones)',
                        'value': 15
                    },
                    {
                        'name' : 'Cantidad de niños referidos (niños sin aumento de hemoglobina con 3 suplementaciones)',
                        'value': 15
                    },
                    {
                        'name' : 'Padres que no quieren que se realice el tratamiento',
                        'value': 5
                    }
                ],
                'EN': [
                    {
                        'name' : 'Niños tratados',
                        'value': 70
                    },
                    {
                        'name' : 'Niños no tratados',
                        'value': 19
                    },
                    {
                        'name' : 'Niños recuperados completos (un niño recuperado es aquel que tenga mas de 11 en hemoglobina + 6 suplementaciones)',
                        'value': 33
                    },
                    {
                        'name' : 'Niños recuperados Incompletos (un niño como hemoglobina mayor o = 11 sin cumplir sus 6 suplementaciones)',
                        'value': 22
                    },
                    {
                        'name' : 'Cantidad de niños referidos (niños sin aumento de hemoglobina con 3 suplementaciones)',
                        'value': 27
                    },
                    {
                        'name' : 'Padres que no quieren que se realice el tratamiento',
                        'value': 8
                    }
                ],
                'DC': [
                    {
                        'name' : 'Niños tratados',
                        'value': 60
                    },
                    {
                        'name' : 'Niños no tratados',
                        'value': 15
                    },
                    {
                        'name' : 'Niños recuperados completos (un niño recuperado es aquel que tenga mas de 11 en hemoglobina + 6 suplementaciones)',
                        'value': 32
                    },
                    {
                        'name' : 'Niños recuperados Incompletos (un niño como hemoglobina mayor o = 11 sin cumplir sus 6 suplementaciones)',
                        'value': 23
                    },
                    {
                        'name' : 'Cantidad de niños referidos (niños sin aumento de hemoglobina con 3 suplementaciones)',
                        'value': 25
                    },
                    {
                        'name' : 'Padres que no quieren que se realice el tratamiento',
                        'value': 11
                    }
                ],
                'NV': [
                    {
                        'name' : 'Niños tratados',
                        'value': 58
                    },
                    {
                        'name' : 'Niños no tratados',
                        'value': 16
                    },
                    {
                        'name' : 'Niños recuperados completos (un niño recuperado es aquel que tenga mas de 11 en hemoglobina + 6 suplementaciones)',
                        'value': 30
                    },
                    {
                        'name' : 'Niños recuperados Incompletos (un niño como hemoglobina mayor o = 11 sin cumplir sus 6 suplementaciones)',
                        'value': 27
                    },
                    {
                        'name' : 'Cantidad de niños referidos (niños sin aumento de hemoglobina con 3 suplementaciones)',
                        'value': 22
                    },
                    {
                        'name' : 'Padres que no quieren que se realice el tratamiento',
                        'value': 12
                    }
                ]
            },
            'footerLeft' : {
                'title': 'Niños tratados',
                'count': {
                    'DC': 60,
                    'NV': 58,
                    'EN': 70,
                    'FB': 72
                }
            },
            'footerRight': {
                'title': 'Niños no tratados',
                'count': {
                    'DC': 15,
                    'NV': 16,
                    'EN': 19,
                    'FB': 17
                }
            }
        },
        'widget7'      : {
            'title'   : 'Schedule',
            'ranges'  : {
                'FB': 'Febrero',
                'EN': 'Enero',
                'DC': 'Diciembre',
                'NV': 'Noviembre'                                               
            },
            'schedule': {
                'NV' : [
                    {
                        'title': 'Pedro Hernandez - pedro.hernandez@sisva.com',
                        'time' : '99',                        
                    },
                    {
                        'title': 'José Rodrigez - jose.rodriguez@sisva.com',
                        'time' : '85'
                    },
                    {
                        'title': 'Luis Mamani - luis.mamani@sisva.com',
                        'time' : '80'
                    },
                    {
                        'title': 'Alexsandre Vasquez - alexsandre.vasquez@sisva.com',
                        'time' : '90'
                    }
                ],
                'DC': [
                    {
                        'title': 'Pedro Hernandez - pedro.hernandez@sisva.com',
                        'time' : '95',                        
                    },
                    {
                        'title': 'José Rodrigez - jose.rodriguez@sisva.com',
                        'time' : '80'
                    },
                    {
                        'title': 'Luis Mamani - luis.mamani@sisva.com',
                        'time' : '80'
                    },
                    {
                        'title': 'Alexsandre Vasquez - alexsandre.vasquez@sisva.com',
                        'time' : '90'
                    }
                ],
                'EN': [
                    {
                        'title': 'Pedro Hernandez - pedro.hernandez@sisva.com',
                        'time' : '98',                        
                    },
                    {
                        'title': 'José Rodrigez - jose.rodriguez@sisva.com',
                        'time' : '90'
                    },
                    {
                        'title': 'Luis Mamani - luis.mamani@sisva.com',
                        'time' : '90'
                    },
                    {
                        'title': 'Alexsandre Vasquez - alexsandre.vasquez@sisva.com',
                        'time' : '80'
                    }
                ],
                'FB': [
                    {
                        'title': 'Pedro Hernandez - pedro.hernandez@sisva.com',
                        'time' : '80',                        
                    },
                    {
                        'title': 'José Rodrigez - jose.rodriguez@sisva.com',
                        'time' : '99'
                    },
                    {
                        'title': 'Luis Mamani - luis.mamani@sisva.com',
                        'time' : '100'
                    },
                    {
                        'title': 'Alexsandre Vasquez - alexsandre.vasquez@sisva.com',
                        'time' : '100'
                    }
                ]
            }
        },
        'widget8'      : {
            'title'      : 'Task Distribution',
            'ranges'     : {
                'FB': 'Febrero',
                'EN': 'Enero',
                'DC': 'Diciembre',
                'NV': 'Noviembre',
            },
            'mainChart'  : {
                'FB': [
                    {
                        'name' : 'Niños tamizados',
                        'value': 72
                    },
                    {
                        'name' : 'Niños no tamizados',
                        'value': 17
                    },
                    {
                        'name' : 'Niños no ubicados',
                        'value': 42
                    },
                    {
                        'name' : 'Padres que no quieren que se realice el tamizaje',
                        'value': 5
                    }
                ],
                'EN': [
                    {
                        'name' : 'Niños tamizados',
                        'value': 70
                    },
                    {
                        'name' : 'Niños no tamizados',
                        'value': 19
                    },
                    {
                        'name' : 'Niños no ubicados',
                        'value': 15
                    },
                    {
                        'name' : 'Padres que no quieren que se realice el tamizaje',
                        'value': 11
                    }
                ],
                'DC': [
                    {
                        'name' : 'Niños tamizados',
                        'value': 60
                    },
                    {
                        'name' : 'Niños no tamizados',
                        'value': 15
                    },
                    {
                        'name' : 'Niños no ubicados',
                        'value': 18
                    },
                    {
                        'name' : 'Padres que no quieren que se realice el tamizaje',
                        'value': 12
                    }
                ],
                'NV': [
                    {
                        'name' : 'Niños tamizados',
                        'value': 58
                    },
                    {
                        'name' : 'Niños no tamizados',
                        'value': 16
                    },
                    {
                        'name' : 'Niños no ubicados',
                        'value': 20
                    },
                    {
                        'name' : 'Padres que no quieren que se realice el tamizaje',
                        'value': 15
                    }
                ]
            },
            'footerLeft' : {
                'title': 'Niños tamizados',
                'count': {
                    'NV': 58,
                    'DC': 60,                    
                    'EN': 70,
                    'FB': 72
                }
            },
            'footerRight': {
                'title': 'Niños no tamizados',
                'count': {
                    'NV': 16,
                    'DC': 15,                    
                    'EN': 19,
                    'FB': 17
                }
            }
        }
    };
}
