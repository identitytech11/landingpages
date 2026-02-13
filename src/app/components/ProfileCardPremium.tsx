import { Phone, Mail, Linkedin, MapPin, MessageCircle, Download, Globe, Calendar, Sparkles, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useState } from 'react';

export function ProfileCardPremium() {
  const [isSharing, setIsSharing] = useState(false);

  const contactInfo = {
    name: "John Anderson",
    title: "Marketing Director",
    company: "Identity",
    tagline: "Helping brands tell their story",
    bio: "10+ years of experience in digital marketing and brand strategy. Passionate about creating meaningful connections.",
    email: "john.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "Los Angeles, CA",
    linkedin: "https://linkedin.com/in/johnanderson",
    whatsapp: "15551234567",
    website: "https://johnanderson.com"
  };

  const skills = [
    "Marketing Strategy",
    "Brand Development",
    "Digital Marketing",
    "Content Creation",
    "Team Leadership"
  ];

  const stats = [
    { label: "Projects", value: "150+" },
    { label: "Experience", value: "10 Yrs" },
    { label: "Clients", value: "50+" }
  ];

  const contactButtons = [
    {
      icon: <Phone className="size-4" />,
      label: "Call",
      href: `tel:${contactInfo.phone}`,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <MessageCircle className="size-4" />,
      label: "WhatsApp",
      href: `https://wa.me/${contactInfo.whatsapp}`,
      color: "from-green-600 to-green-700"
    },
    {
      icon: <Mail className="size-4" />,
      label: "Email",
      href: `mailto:${contactInfo.email}`,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Linkedin className="size-4" />,
      label: "LinkedIn",
      href: contactInfo.linkedin,
      color: "from-blue-600 to-blue-700"
    }
  ];

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TITLE:${contactInfo.title}
ORG:${contactInfo.company}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.linkedin}
ADR:;;${contactInfo.location};;;;
NOTE:${contactInfo.bio}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${contactInfo.name.replace(' ', '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    setIsSharing(true);
    if (navigator.share) {
      try {
        await navigator.share({
          title: contactInfo.name,
          text: `Connect with ${contactInfo.name} - ${contactInfo.title}`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
    setIsSharing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
        {/* Animated gradient header */}
        <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 pt-8 pb-24 overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Share button */}
          <div className="absolute top-4 right-4 z-10">
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={handleShare}
              disabled={isSharing}
            >
              <Share2 className="size-4" />
            </Button>
          </div>

          {/* Profile image with animation */}
          <motion.div
            className="relative flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="relative">
              <div className="size-36 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                  alt={contactInfo.name}
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-2 shadow-lg">
                <Sparkles className="size-5 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 px-6 pb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <CardContent className="px-6 pb-6 -mt-16 relative z-10">
          {/* Info Card with glass morphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="mb-6 shadow-xl border-0 bg-white/95 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {contactInfo.name}
                  </h1>
                  <p className="text-purple-600 font-semibold mb-1">
                    {contactInfo.title} at {contactInfo.company}
                  </p>
                  <p className="text-sm text-gray-500 italic mb-3">
                    {contactInfo.tagline}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {contactInfo.bio}
                  </p>
                </div>

                {/* Skills with animation */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-purple-700 border-purple-200 text-xs">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact buttons with gradients */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {contactButtons.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Button
                  className={`w-full h-14 bg-gradient-to-r ${button.color} text-white border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105`}
                  asChild
                >
                  <a href={button.href} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col items-center gap-1">
                      {button.icon}
                      <span className="text-xs font-medium">{button.label}</span>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Website Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              variant="outline"
              className="w-full mb-3 h-12 border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all"
              asChild
            >
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">
                <Globe className="size-4 mr-2 text-purple-600" />
                <span className="font-medium">Visit Website</span>
              </a>
            </Button>
          </motion.div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button
              className="h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={handleSaveContact}
            >
              <Download className="size-4 mr-2" />
              Save Contact
            </Button>
            <Button className="h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Calendar className="size-4 mr-2" />
              Book Meeting
            </Button>
          </div>

          {/* Location with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="relative h-44 bg-gray-100">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.5,33.9,-118.0,34.2&layer=mapnik&marker=34.05,-118.25`}
                  className="size-full border-0"
                  loading="lazy"
                  title="Location Map"
                />
              </div>
              <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                    <MapPin className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Location</p>
                    <p className="text-base font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
