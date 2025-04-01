
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("projects");
  const [loginMode, setLoginMode] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo authentication
    if (username === "admin" && password === "password") {
      setAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the Admin Panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try admin/password for demo.",
        variant: "destructive",
      });
    }
  };

  const handleSaveChanges = () => {
    toast({
      title: "Changes Saved",
      description: "Your changes have been saved successfully.",
    });
  };

  if (!isOpen) return null;

  if (!authenticated) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-navy border-lightNavy text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lightSlate">Admin Access</DialogTitle>
            <DialogDescription className="text-slate">
              Please login to access the admin panel.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-lightSlate mb-1">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-lightNavy border-navy focus:border-teal text-white"
              />
              <p className="text-xs text-teal mt-1">Demo username: admin</p>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-lightSlate mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-lightNavy border-navy focus:border-teal text-white"
              />
              <p className="text-xs text-teal mt-1">Demo password: password</p>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose} className="border-lightNavy text-slate">
                Cancel
              </Button>
              <Button type="submit" className="bg-teal text-navy hover:bg-teal/80">
                Login
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-navy border-lightNavy text-white max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lightSlate text-xl">Portfolio Admin Panel</DialogTitle>
          <DialogDescription className="text-slate">
            Manage your portfolio content from this panel.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="w-full grid grid-cols-4 bg-lightNavy mb-6">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-lightSlate">Manage Projects</h3>
              <Button className="bg-teal text-navy hover:bg-teal/80">Add Project</Button>
            </div>
            
            <div className="border border-lightNavy rounded-md p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lightSlate font-medium">Biometric-Based Secure Access</h4>
                  <p className="text-slate text-sm">Full-stack project</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm" className="border-teal text-teal hover:bg-teal/10">Edit</Button>
                  <Button variant="outline" size="sm" className="border-destructive text-destructive hover:bg-destructive/10">Delete</Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lightSlate font-medium">Facial Expression Recognition</h4>
                  <p className="text-slate text-sm">Machine learning project</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm" className="border-teal text-teal hover:bg-teal/10">Edit</Button>
                  <Button variant="outline" size="sm" className="border-destructive text-destructive hover:bg-destructive/10">Delete</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-lightSlate">Manage Skills</h3>
              <Button className="bg-teal text-navy hover:bg-teal/80">Add Skill</Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-lightNavy rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lightSlate font-medium">Core Java</h4>
                  <Button variant="outline" size="sm" className="border-teal text-teal hover:bg-teal/10 h-7 px-2">Edit</Button>
                </div>
                <div className="flex items-center">
                  <span className="text-slate text-sm mr-2">Proficiency:</span>
                  <div className="w-full bg-lightNavy rounded-full h-2">
                    <div className="bg-teal h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <span className="text-teal text-xs ml-2">90%</span>
                </div>
              </div>
              
              <div className="border border-lightNavy rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lightSlate font-medium">JavaScript</h4>
                  <Button variant="outline" size="sm" className="border-teal text-teal hover:bg-teal/10 h-7 px-2">Edit</Button>
                </div>
                <div className="flex items-center">
                  <span className="text-slate text-sm mr-2">Proficiency:</span>
                  <div className="w-full bg-lightNavy rounded-full h-2">
                    <div className="bg-teal h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="text-teal text-xs ml-2">85%</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-lightSlate">Manage Experience</h3>
              <div className="space-x-2">
                <Button className="bg-teal text-navy hover:bg-teal/80">Add Education</Button>
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">Add Achievement</Button>
              </div>
            </div>
            
            <div className="border border-lightNavy rounded-md p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lightSlate font-medium">B.Tech, Computer Science & Engineering</h4>
                  <p className="text-slate text-sm">MRIT (2018-2022)</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm" className="border-teal text-teal hover:bg-teal/10">Edit</Button>
                  <Button variant="outline" size="sm" className="border-destructive text-destructive hover:bg-destructive/10">Delete</Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lightSlate font-medium">Microsoft Certification</h4>
                  <p className="text-slate text-sm">Achievement (2022)</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm" className="border-teal text-teal hover:bg-teal/10">Edit</Button>
                  <Button variant="outline" size="sm" className="border-destructive text-destructive hover:bg-destructive/10">Delete</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <h3 className="text-lg font-medium text-lightSlate">Theme Settings</h3>
            
            <div className="border border-lightNavy rounded-md p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-lightSlate mb-1">Primary Color</label>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-teal cursor-pointer border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-pink-500 cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 cursor-pointer"></div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-lightSlate mb-1">Font Selection</label>
                <select className="w-full bg-lightNavy border border-navy rounded-md p-2 text-slate">
                  <option value="poppins-inter">Poppins & Inter (Default)</option>
                  <option value="roboto-open-sans">Roboto & Open Sans</option>
                  <option value="montserrat-source-sans">Montserrat & Source Sans</option>
                </select>
              </div>
              
              <Button onClick={handleSaveChanges} className="bg-teal text-navy hover:bg-teal/80 w-full">
                Save Settings
              </Button>
            </div>
            
            <div className="border border-lightNavy rounded-md p-4">
              <h4 className="text-lightSlate font-medium mb-2">SEO Settings</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate mb-1">Meta Title</label>
                  <Input 
                    defaultValue="Md Sarwar Raish | React & Full-stack Developer Portfolio" 
                    className="bg-lightNavy border-navy focus:border-teal text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate mb-1">Meta Description</label>
                  <Input 
                    defaultValue="Full-stack developer specializing in React, JavaScript, and modern web technologies. Available for remote and hybrid roles worldwide." 
                    className="bg-lightNavy border-navy focus:border-teal text-white"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button onClick={onClose} className="bg-teal text-navy hover:bg-teal/80">
            Close Panel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;
