
    using System;    
    using System.Collections.Generic;    
    using System.Linq;    
    using System.Text;    
    using System.Threading.Tasks;    
        
    namespace restservice    
    {    
        public class Service : IService    
        {    
            public USER DoLogin(string user, string pass)    
            {    
                try    
                {    
                    USER data = new USER();    
        
                    if (user == "user" && pass == "login")    
                    {    
                        data.username = user;    
                        data.password = pass;    
                        data.firstname = "Jason";    
                        data.lastname = "Volney";    
                    }    
        
                    return data;    
                }    
                catch (Exception ex)    
                {    
                    return null;    
                }    
            }    
        }    
    }   
