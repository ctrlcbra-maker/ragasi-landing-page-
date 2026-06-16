
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const ContactFooter = () => {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      const submissions = JSON.parse(localStorage.getItem('ragasi_contact') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('ragasi_contact', JSON.stringify(submissions));

      toast.success('Pesan berhasil dikirim. Kami akan segera menghubungi Anda.');
      setFormData({ nama: '', email: '', pesan: '' });
    } catch (error) {
      toast.error('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="kontak" className="bg-navy-gradient text-white pt-24 pb-12 border-t border-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-6 text-white">Hubungi Kami</h2>
            <p className="text-white/70 mb-8">Tinggalkan pesan Anda dan tim kami akan segera merespon.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-xl border border-white/10">
              <div>
                <Label htmlFor="nama" className="text-white/90">Nama Lengkap</Label>
                <Input
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white/90">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent"
                  placeholder="nama@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="pesan" className="text-white/90">Pesan</Label>
                <Textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-semibold"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </Button>
            </form>
          </motion.div>

          {/* Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="mb-10">
                <span className="text-3xl font-bold text-white mb-4 block" style={{ fontFamily: 'Playfair Display, serif' }}>
                  RAGASI GRUP
                </span>
                <p className="text-white/70 max-w-md">
                  Mitra terpercaya untuk pertumbuhan bisnis yang berkelanjutan dan inovatif.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 text-white/80">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span>Gedung Ragasi Tower Lt. 8<br />Jl. Jend. Sudirman Kav. 45, Jakarta Selatan 12930</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>+62 21 555 0123 (Office) / +62 811 2233 4455 (WA)</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <span>contact@ragasigrup.com</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Lini Bisnis</h4>
                  <ul className="space-y-2 text-white/70">
                    <li><a href="#bisnis" className="hover:text-accent transition-colors">Apotek Ragasi</a></li>
                    <li><a href="#bisnis" className="hover:text-accent transition-colors">Ragasi Karya</a></li>
                    <li><a href="#bisnis" className="hover:text-accent transition-colors">Kudah Hitam Express</a></li>
                    <li><a href="#bisnis" className="hover:text-accent transition-colors">Bariyu Caffe</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Perusahaan</h4>
                  <ul className="space-y-2 text-white/70">
                    <li><a href="#tentang" className="hover:text-accent transition-colors">Tentang Kami</a></li>
                    <li><a href="#karir" className="hover:text-accent transition-colors">Karir</a></li>
                    <li><a href="#berita" className="hover:text-accent transition-colors">Berita & Media</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2026 RAGASI GRUP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
