import { Phone, Mail, Linkedin, MapPin, MessageCircle, Download, Globe, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function ProfileCardStandard() {
  const contactInfo = {
    name: "John Anderson",
    title: "Marketing Director",
    company: "Identity",
    tagline: "Helping brands tell their story",
    email: "john.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "Los Angeles, CA",
    linkedin: "https://linkedin.com/in/johnanderson",
    whatsapp: "15551234567",
    website: "https://johnanderson.com"
  };

  const skills = ["Marketing Strategy", "Brand Development", "Digital Marketing"];

  const contactButtons = [
    {
      icon: <Phone className="size-4" />,
      label: "Call",
      href: `tel:${contactInfo.phone}`
    },
    {
      icon: <MessageCircle className="size-4" />,
      label: "WhatsApp",
      href: `https://wa.me/${contactInfo.whatsapp}`
    },
    {
      icon: <Mail className="size-4" />,
      label: "Email",
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: <Linkedin className="size-4" />,
      label: "LinkedIn",
      href: contactInfo.linkedin
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

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl overflow-hidden border-0">
      {/* Header with gradient background */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 pt-12 pb-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative flex justify-center">
          <div className="size-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
              alt={contactInfo.name}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <CardContent className="relative px-6 pb-6 -mt-12">
        {/* Info Card */}
        <Card className="mb-6 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {contactInfo.name}
              </h1>
              <p className="text-blue-600 font-medium mb-1">
                {contactInfo.title} at {contactInfo.company}
              </p>
              <p className="text-sm text-gray-500 italic">
                {contactInfo.tagline}
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {contactButtons.map((button, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center justify-center gap-2 h-12 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              asChild
            >
              <a href={button.href} target="_blank" rel="noopener noreferrer">
                {button.icon}
                <span className="text-sm font-medium">{button.label}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Website Button */}
        <Button
          variant="outline"
          className="w-full mb-3 flex items-center justify-center gap-2 h-12 hover:bg-gray-50"
          asChild
        >
          <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">
            <Globe className="size-4" />
            <span>Visit Website</span>
          </a>
        </Button>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSaveContact}
          >
            <Download className="size-4 mr-2" />
            Save Contact
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Calendar className="size-4 mr-2" />
            Book Meeting
          </Button>
        </div>

        {/* Location */}
        <Card className="overflow-hidden">
          <div className="relative h-40 bg-gray-100">
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.5,33.9,-118.0,34.2&layer=mapnik&marker=34.05,-118.25`}
              className="size-full border-0"
              loading="lazy"
              title="Location Map"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 flex items-center gap-3">
            <div className="size-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <MapPin className="size-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Location</p>
              <p className="text-sm font-semibold text-gray-900">
                {contactInfo.location}
              </p>
            </div>
          </div>
        </Card>
      </CardContent>
    </Card>
  );
}
