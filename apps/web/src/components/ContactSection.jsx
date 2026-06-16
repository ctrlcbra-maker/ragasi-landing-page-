
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    pesan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.nama || !formData.email || !formData.pesan) {
      toast.error('Mohon lengkapi semua field yang wajib diisi');
      setIsSubmitting(false);
      return;
    }

    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast.success('Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
      
      setFormData({
        nama: '',
        email: '',
        telepon: '',
        pesan: ''
      });
    } catch (error) {
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Raya Bisnis No. 123, Jakarta Selatan, DKI Jakarta 12345'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ragasiholding.com'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 21 1234 5678'
    }
  ];

  return (
    <section id="kontak" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground mb-6">Hubungi Kami</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Kami siap membantu Anda. Hubungi kami untuk informasi lebih lanjut tentang layanan kami 
            atau untuk memulai kemitraan bisnis yang menguntungkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="nama" className="text-card-foreground">Nama *</Label>
                  <Input
                    id="nama"
                    name="nama"
                    type="text"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background text-foreground border-input focus:border-primary focus:ring-primary"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-card-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-background text-foreground border-input focus:border-primary focus:ring-primary"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telepon" className="text-card-foreground">Nomor Telepon</Label>
                  <Input
                    id="telepon"
                    name="telepon"
                    type="tel"
                    value={formData.telepon}
                    onChange={handleChange}
                    className="mt-2 bg-background text-foreground border-input focus:border-primary focus:ring-primary"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <Label htmlFor="pesan" className="text-card-foreground">Pesan *</Label>
                  <Textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 bg-background text-foreground border-input focus:border-primary focus:ring-primary resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{info.title}</h3>
                  <p className="text-card-foreground/70">{info.content}</p>
                </div>
              </motion.div>
            ))}

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Jam Operasional</h3>
              <div className="space-y-2 text-card-foreground/70">
                <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                <p>Sabtu: 08:00 - 13:00 WIB</p>
                <p>Minggu & Hari Libur: Tutup</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
