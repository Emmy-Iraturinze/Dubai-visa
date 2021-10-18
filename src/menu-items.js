const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/app/dashboard/default',
                    icon: 'feather icon-home'
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'Visas details',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'Visas',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'request',
                            title: ' Request History',
                            type: 'item',
                            url: '/tables/requesthistory',
                        
                        },
                        {
                            id: 'Request_New_Visa',
                            title: 'New Visa',
                            type: 'item',
                            url: '/tables/bootstrap',
                           
                        },
                   
                     
                
                  
                  
                  
                    
                    
                    ]
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'Branch & New Branch',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'Vs',
                    title: 'Branches',
                    type: 'collapse',
                    icon: 'feather icon-server',
                    children: [
                        {
                            id: 'Branchbistory',
                            title: ' Branch History',
                            type: 'item',
                            url: '/tables/branchlist',
                        
                        },
                        {
                            id: 'Request_New_Visa',
                            title: 'New Branch',
                            type: 'item',
                            url: '/tables/newbranch',
                          
                        },
                   
                     
                        // {
                        //     id: 'button',
                        //     title: 'Button',
                        //     type: 'item',
                        //     url: '/basic/button'
                        // },
                   
                  
                  
                  
                    
                    
                    ]
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'Users & New User',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'user',
                    title: 'Users',
                    type: 'collapse',
                    icon: 'feather icon-file-text',
                    children: [
                        {
                            id: 'userlist',
                            title: ' User List',
                            type: 'item',
                            url: '/tables/userlist',
                           
                        },
                        {
                            id: 'newuser',
                            title: 'New User',
                            type: 'item',
                            url: '/tables/newuser',
                           
                        },
                   
                     
                        // {
                        //     id: 'button',
                        //     title: 'Button',
                        //     type: 'item',
                        //     url: '/basic/button'
                        // },
                   
                  
                  
                  
                    
                    
                    ]
                }
            ]
        },    
    ]
};

export default menuItems;
