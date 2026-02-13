import { Phone, Mail, Linkedin, MapPin, MessageCircle, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function ProfileCard() {
  const contactInfo = {
    name: "John Anderson",
    title: "Marketing Director at Identity",
    email: "john.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "Los Angeles, CA",
    linkedin: "https://linkedin.com/in/johnanderson",
    whatsapp: "15551234567"
  };

  const handleSaveContact = () => {
    // Create vCard format
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TITLE:${contactInfo.title}
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
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardContent className="pt-8 px-6 pb-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative size-32 rounded-full overflow-hidden ring-4 ring-gray-100">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
              alt={contactInfo.name}
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {contactInfo.name}
          </h1>
          <p className="text-gray-600">
            {contactInfo.title}
          </p>
        </div>

        {/* Contact Buttons Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-3"
            asChild
          >
            <a href={`tel:${contactInfo.phone}`} target="_blank" rel="noopener noreferrer">
              <Phone className="size-5" />
              <span className="text-xs">Call</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-3"
            asChild
          >
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" />
              <span className="text-xs">WhatsApp</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 h-auto py-3"
            asChild
          >
            <a href={`mailto:${contactInfo.email}`} target="_blank" rel="noopener noreferrer">
              <Mail className="size-5" />
              <span className="text-xs">Email</span>
            </a>
          </Button>
        </div>

        {/* LinkedIn Button */}
        <Button
          variant="outline"
          className="w-full mb-4 flex items-center justify-center gap-2"
          asChild
        >
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="size-5 text-blue-600" />
            <span>LinkedIn</span>
          </a>
        </Button>

        {/* Save to Contacts Button */}
        <Button
          className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleSaveContact}
        >
          <Download className="size-5 mr-2" />
          Save to Contacts
        </Button>

        {/* Location Map */}
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <div className="relative h-48 bg-gray-100">
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.5,33.9,-118.0,34.2&layer=mapnik&marker=34.05,-118.25`}
              className="size-full border-0"
              loading="lazy"
              title="Location Map"
            />
          </div>
          <div className="bg-white p-3 flex items-center gap-2 border-t border-gray-200">
            <MapPin className="size-5 text-red-500" />
            <span className="text-sm font-medium text-gray-900">
              {contactInfo.location}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
