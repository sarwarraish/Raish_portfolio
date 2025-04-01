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
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Settings, 
  FileCode, 
  GraduationCap, 
  Code2, 
  Search, 
  Save, 
  Plus, 
  Edit, 
  Trash2, 
  LogIn 
} from "lucide-react";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("projects");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      // Demo authentication
      if (username === "admin" && password === "password") {
        setAuthenticated(true);
        toast({
          title: "Login Successful",
          description: "Welcome to the Admin Panel",
          variant: "success",
        });
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Try admin/password for demo.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSaveChanges = () => {
    toast({
      title: "Changes Saved",
      description: "Your changes have been saved successfully.",
      variant: "success",
    });
  };

  if (!isOpen) return null;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  };

  if (!authenticated) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-gradient-to-br from-navy to-purple-900/50 border-purple-500/30 text-white max-w-md backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-lightSlate flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-400" /> 
              Admin Access
            </DialogTitle>
            <DialogDescription className="text-slate">
              Please login to access the admin panel.
            </DialogDescription>
          </DialogHeader>

          <motion.form 
            onSubmit={handleLogin} 
            className="space-y-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-lightSlate mb-1">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-purple-900/20 border-purple-500/30 focus:border-purple-400 text-white"
              />
              <p className="text-xs text-purple-400 mt-1">Demo username: admin</p>
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
                className="bg-purple-900/20 border-purple-500/30 focus:border-purple-400 text-white"
              />
              <p className="text-xs text-purple-400 mt-1">Demo password: password</p>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose} className="border-purple-500/30 text-slate hover:bg-purple-500/20">
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </span>
                )}
              </Button>
            </DialogFooter>
          </motion.form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-navy to-purple-900/50 border-purple-500/30 text-white max-w-5xl max-h-[90vh] overflow-y-auto backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-lightSlate text-xl flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-400" />
            Portfolio Admin Panel
          </DialogTitle>
          <DialogDescription className="text-slate">
            Manage your portfolio content from this panel.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="w-full grid grid-cols-4 bg-purple-900/30 mb-6 p-1">
            <TabsTrigger value="projects" className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white">
              <FileCode className="mr-2 h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white">
              <Code2 className="mr-2 h-4 w-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white">
              <GraduationCap className="mr-2 h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-purple-500/30 data-[state=active]:text-white">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <TabsContent value="projects" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-lightSlate flex items-center">
                  <FileCode className="mr-2 h-5 w-5 text-purple-400" />
                  Manage Projects
                </h3>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Project
                  </Button>
                </motion.div>
              </div>
              
              <div className="border border-purple-500/30 rounded-md p-4 space-y-4 bg-purple-900/20 backdrop-blur-sm">
                <motion.div 
                  className="flex justify-between items-center p-3 hover:bg-purple-500/10 rounded-md transition-colors"
                  variants={itemVariants}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lightSlate font-medium">Biometric-Based Secure Access</h4>
                      <Badge variant="elite" className="ml-2">Featured</Badge>
                    </div>
                    <p className="text-slate text-sm">Full-stack project</p>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                      <Edit className="mr-1 h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10">
                      <Trash2 className="mr-1 h-3 w-3" />
                      Delete
                    </Button>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex justify-between items-center p-3 hover:bg-purple-500/10 rounded-md transition-colors"
                  variants={itemVariants}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lightSlate font-medium">Facial Expression Recognition</h4>
                      <Badge variant="info">AI</Badge>
                    </div>
                    <p className="text-slate text-sm">Machine learning project</p>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                      <Edit className="mr-1 h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10">
                      <Trash2 className="mr-1 h-3 w-3" />
                      Delete
                    </Button>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-4 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate" />
                  <Input 
                    placeholder="Search projects..." 
                    className="pl-10 bg-purple-900/20 border-purple-500/30 focus:border-purple-400 text-white"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-lightSlate flex items-center">
                  <Code2 className="mr-2 h-5 w-5 text-purple-400" />
                  Manage Skills
                </h3>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Skill
                  </Button>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  className="border border-purple-500/30 rounded-md p-4 bg-purple-900/20 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lightSlate font-medium">Core Java</h4>
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 h-7 px-2">
                      <Edit className="mr-1 h-3 w-3" />
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate text-sm mr-2">Proficiency:</span>
                    <div className="w-full bg-purple-900/30 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                    <span className="text-purple-400 text-xs ml-2">90%</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="border border-purple-500/30 rounded-md p-4 bg-purple-900/20 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all"
                  variants={itemVariants}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lightSlate font-medium">JavaScript</h4>
                    <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 h-7 px-2">
                      <Edit className="mr-1 h-3 w-3" />
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate text-sm mr-2">Proficiency:</span>
                    <div className="w-full bg-purple-900/30 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                    <span className="text-purple-400 text-xs ml-2">85%</span>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </motion.div>
          
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
            <h3 className="text-lg font-medium text-lightSlate flex items-center">
              <Settings className="mr-2 h-5 w-5 text-purple-400" />
              Theme Settings
            </h3>
            
            <div className="border border-purple-500/30 rounded-md p-4 bg-purple-900/20 backdrop-blur-sm">
              <div className="mb-4">
                <label className="block text-sm font-medium text-lightSlate mb-1">Primary Color</label>
                <div className="flex space-x-3">
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer border-2 border-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-pink-500 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-indigo-500 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-amber-500 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-lightSlate mb-1">Font Selection</label>
                <select className="w-full bg-purple-900/20 border border-purple-500/30 rounded-md p-2 text-slate">
                  <option value="poppins-inter">Poppins & Inter (Default)</option>
                  <option value="roboto-open-sans">Roboto & Open Sans</option>
                  <option value="montserrat-source-sans">Montserrat & Source Sans</option>
                </select>
              </div>
              
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button onClick={handleSaveChanges} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 w-full flex items-center justify-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Settings
                </Button>
              </motion.div>
            </div>
            
            <div className="border border-purple-500/30 rounded-md p-4 bg-purple-900/20 backdrop-blur-sm">
              <h4 className="text-lightSlate font-medium mb-2 flex items-center">
                <Search className="mr-2 h-4 w-4 text-purple-400" />
                SEO Settings
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate mb-1">Meta Title</label>
                  <Input 
                    defaultValue="Md Sarwar Raish | React & Full-stack Developer Portfolio" 
                    className="bg-purple-900/20 border-purple-500/30 focus:border-purple-400 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate mb-1">Meta Description</label>
                  <Input 
                    defaultValue="Full-stack developer specializing in React, JavaScript, and modern web technologies. Available for remote and hybrid roles worldwide." 
                    className="bg-purple-900/20 border-purple-500/30 focus:border-purple-400 text-white"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={onClose} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
              Close Panel
            </Button>
          </motion.div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;
