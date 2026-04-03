import { HelmetProvider } from 'react-helmet-async';
import { Schema } from './components/Schema';
import { useEffect, useState } from 'react';

const sampleFAQs = [
  {
    question: "How long does a ceramic coating last?",
    answer: "Our professional ceramic coatings last 2-5 years depending on the package chosen and maintenance."
  },
  {
    question: "How much does a vehicle wrap cost?",
    answer: "Vehicle wrap pricing varies based on vehicle size and wrap type. Contact us for a free quote."
  }
];

function SchemaOutput() {
  const [schemaJson, setSchemaJson] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      const allSchemas: any[] = [];
      scripts.forEach(script => {
        try {
          const parsed = JSON.parse(script.textContent || '');
          if (Array.isArray(parsed)) {
            allSchemas.push(...parsed);
          } else {
            allSchemas.push(parsed);
          }
        } catch {}
      });
      setSchemaJson(JSON.stringify(allSchemas, null, 2));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>
        Schema.org JSON-LD Output
      </h1>
      <p style={{ color: '#666' }}>
        Below is the generated structured data for the Schema component:
      </p>

      <Schema
        type="service"
        serviceName="Ceramic Coating"
        serviceDescription="Professional ceramic coating application for long-lasting paint protection."
        serviceUrl="/services/ceramic-coating"
        pageTitle="Ceramic Coating Services - Wrap Wizardz"
        pageDescription="Professional ceramic coating in Warminster, PA"
        pageUrl="/services/ceramic-coating"
        faqs={sampleFAQs}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Ceramic Coating", url: "/services/ceramic-coating" }
        ]}
      />

      <pre style={{
        background: '#1e1e1e',
        color: '#d4d4d4',
        padding: '1.5rem',
        borderRadius: '8px',
        overflow: 'auto',
        maxHeight: '80vh',
        fontSize: '13px',
        lineHeight: '1.5'
      }}>
        {schemaJson || 'Loading schema output...'}
      </pre>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <SchemaOutput />
    </HelmetProvider>
  );
}
