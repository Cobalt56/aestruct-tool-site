import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Send, CheckCircle, MessageSquare, Building, User } from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';

const Contact: React.FC = () => {
  usePageSEO({
    title: "Contact Us | AEstruct Inc.",
    description: "Contact AEstruct Inc. for expert AI strategy in media. Schedule a consultation for custom tool development, workflow audits, or to license our production tools."
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Consulting Services',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Context */}
        <div>
          <h1 className="text-4xl font-serif font-bold text-white mb-6">Let's Build Your Architecture</h1>
          <p className="text-xl text-ae-muted mb-10 leading-relaxed">
            Whether you need a custom AI implementation strategy, advice on rights clearance automation, or a full suite of production tools, our team is ready to assist.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-ae-card p-3 rounded-lg border border-white/10 mr-4">
                <Mail className="w-6 h-6 text-ae-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">General Inquiries</h3>
                <p className="text-ae-muted">contact@aestruct.com</p>
              </div>
            </div>
            
            <div className="bg-ae-card/50 border border-ae-accent/20 rounded-xl p-6 mt-12">
              <h3 className="font-serif text-xl font-bold text-white mb-2">Consultation Process</h3>
              <ol className="space-y-4 text-ae-muted text-sm mt-4">
                <li className="flex gap-3">
                  <span className="font-bold text-ae-accent">01</span>
                  <span>Initial Discovery Call (30 mins)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-ae-accent">02</span>
                  <span>Workflow Audit & Needs Assessment</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-ae-accent">03</span>
                  <span>Custom Implementation Roadmap</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-ae-card border border-white/5 rounded-2xl p-8 shadow-xl">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Message Received</h3>
              <p className="text-ae-muted mb-8 max-w-md">
                Thank you for reaching out. A member of our team will review your inquiry and get back to you within 24 hours.
              </p>
              <Button onClick={() => setStatus('idle')} variant="outline">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Request Contact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-ae-muted">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-ae-muted/50" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-ae-dark border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-ae-accent focus:border-transparent"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-ae-muted">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-ae-muted/50" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-ae-dark border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-ae-accent focus:border-transparent"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-ae-muted">Company / Production Name</label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-5 h-5 text-ae-muted/50" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-ae-dark border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-ae-accent focus:border-transparent"
                    placeholder="Indie Prod LLC"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-ae-muted">I'm interested in...</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-ae-dark border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-ae-accent focus:border-transparent appearance-none"
                >
                  <option>Consulting Services</option>
                  <option>Custom Tool Development</option>
                  <option>Buying Full License (Pro Tools)</option>
                  <option>Partnership / Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-ae-muted">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-ae-muted/50" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-ae-dark border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-2 focus:ring-ae-accent focus:border-transparent"
                    placeholder="Tell us about your project or bottleneck..."
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Request'} <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;