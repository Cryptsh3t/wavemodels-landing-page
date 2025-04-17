import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    city: "",
    photo: null as File | null,
    whatsapp: "",
    telegram: "",
    about: "",
    agreement: false
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData(prev => ({ ...prev, photo: files[0] }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreement: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.city || !formData.whatsapp || !formData.telegram || !formData.about) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.agreement) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setLoading(false);
      
      setFormData({
        fullName: "",
        gender: "",
        birthDate: "",
        city: "",
        photo: null,
        whatsapp: "",
        telegram: "",
        about: "",
        agreement: false
      });
    }, 1500);
  };

  return (
    <section id="form" className="py-20 text-light relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1076259702?h=8f35914296&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&background=1&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "150%",
              height: "150%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
            }}
            title="WAVEMODELS Background"
          ></iframe>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-gold text-3xl md:text-4xl font-bold mb-10 text-center">Анкета</h2>
          
          <div className="bg-dark/80 backdrop-blur-sm p-8 rounded-lg border border-gold/30">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-white">ФИО *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-dark/60 border-gold/30 text-white mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="gender" className="text-white">Пол</Label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 bg-dark/60 border border-gold/30 rounded-md text-white"
                  >
                    <option value="">Выберите пол</option>
                    <option value="female">Женский</option>
                    <option value="male">Мужской</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="birthDate" className="text-white">Дата рождения</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="bg-dark/60 border-gold/30 text-white mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="city" className="text-white">Город *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-dark/60 border-gold/30 text-white mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="photo" className="text-white">Фото в полный рост *</Label>
                  <Input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="bg-dark/60 border-gold/30 text-white mt-1 
                      file:bg-[#FFD700] file:text-dark file:border-1 file:border-gold file:rounded-sm 
                      file:px-2 file:py-1 file:mr-2 file:text-sm file:overflow-hidden file:whitespace-nowrap 
                      file:max-w-[150px] file:truncate hover:file:bg-[#FEF7CD]"
                    placeholder="Выберите файл"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="whatsapp" className="text-white">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="bg-dark/60 border-gold/30 text-white mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="telegram" className="text-white">Telegram Username *</Label>
                  <Input
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    className="bg-dark/60 border-gold/30 text-white mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="about" className="text-white">Расскажите немного о себе *</Label>
                  <Textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    className="bg-dark/60 border-gold/30 text-white mt-1 min-h-[120px]"
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={handleCheckboxChange}
                    className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-black mt-1"
                  />
                  <Label htmlFor="agreement" className="text-white/90 text-sm">
                    Нажимая кнопку "Заполнить", я даю согласие на обработку персональных данных согласно 152-ФЗ.
                  </Label>
                </div>
                
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gold hover:bg-gold/80 text-dark text-lg py-6 px-8 font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.3)]"
                  >
                    {loading ? "Отправка..." : "Заполнить"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
