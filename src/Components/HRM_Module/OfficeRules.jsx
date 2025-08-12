import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import hrmApi from '../../ApiCalling/Hrm_Api';

const OfficeRules = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    date: '',
    name: '',
    position: '',
  });
  const [signatureEmployee, setSignatureEmployee] = useState(null);
  const [signatureHead, setSignatureHead] = useState(null);
  const [error, setError] = useState('');
  const rulesRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'employeeId') {
      setError('');
    }
  };

  const fetchEmployeeData = async (employeeId) => {
    if (!employeeId) {
      setFormData((prev) => ({
        ...prev,
        name: prev.name || '',
        position: prev.position || '',
      }));
      setError('');
      return;
    }
    try {
      const employee = await hrmApi.getEmployeeById(employeeId);
      setFormData((prev) => ({
        ...prev,
        name: prev.name || employee.name || '',
        position: prev.position || employee.jobTitle || '',
      }));
      setError('');
    } catch (err) {
      setError(err.message || 'कर्मचारी आढळला नाही किंवा चुकीचा ID');
      setFormData((prev) => ({
        ...prev,
        name: prev.name || '',
        position: prev.position || '',
      }));
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchEmployeeData(formData.employeeId);
    }, 500);
    return () => clearTimeout(handler);
  }, [formData.employeeId]);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (name === 'signatureEmployee') {
          setSignatureEmployee(reader.result);
        } else if (name === 'signatureHead') {
          setSignatureHead(reader.result);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleDownloadPDF = () => {
    const input = rulesRef.current;
    if (!input) {
      console.error('Ref to rules content not found');
      setError('PDF जनरेशन अयशस्वी झाले. कृपया पुन्हा प्रयत्न करा.');
      return;
    }

    input.style.height = 'auto';
    input.style.overflow = 'visible';

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: true,
      width: input.scrollWidth,
      height: input.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 10;
      const usableWidth = pageWidth - margin * 2;
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = usableWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Handle multi-page content without repetition
      while (heightLeft > 0) {
        pdf.addPage();
        position -= pageHeight; // Move up by one page height
        pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${formData.name || 'कर्मचारी'}_Office_Rules.pdf`);
    }).catch((error) => {
      console.error('PDF generation failed:', error);
      setError('PDF जनरेशन अयशस्वी झाले. कृपया पुन्हा प्रयत्न करा.');
    }).finally(() => {
      input.style.height = '';
      input.style.overflow = '';
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      <div className="bg-white p-6 max-w-3xl w-full shadow-lg rounded-lg mb-6 mx-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">नियमांचे तपशील प्रविष्ट करा</h2>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">कर्मचारी ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="कर्मचारी ID प्रविष्ट करा (उदा., EMP123)"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">दिनांक</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">नाव</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">पदनाव</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">कर्मचारी सही</label>
            <input
              type="file"
              name="signatureEmployee"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">डिपार्टमेंट हेड ची सही</label>
            <input
              type="file"
              name="signatureHead"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div ref={rulesRef} className="bg-white p-8 max-w-3xl w-full shadow-lg rounded-lg mx-4 border border-gray-200">
        <div className="mb-8 text-sm text-gray-600 leading-relaxed font-marathi">
          <div className="text-center mb-4">
            <img
              src="../../../public/Images/BoardWorksListForm/logo.png"
              alt="YNK Enterprises Logo"
              className="mx-auto mb-4 w-24 h-24 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Logo image failed to load');
              }}
            />
          </div>
          <h2 className="text-xl font-semibold text-blue-900 text-center mb-4">ऑफिस स्टाफचे नियम</h2>
          <p className=" mb-4">दिनांक - {formData.date || 'N/A'}</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>ऑफिस ची वेळ सकाळी 9:15 ते संध्याकाळी 6 राहील.</li><br/>
            <li>ऑफिस मध्ये इन टाइम व आऊट टाइम व्यतिरिक्त ऑफिस बाहेर जाण्याचे असल्यास ठाम करावे.</li><br/>
            <li>ऑफिस मध्ये 9:30 वा. ते 9:31 वा. 01 मिनिटे 10 मिनिटांपर्यंत 100/- रुपये दंड लागेल व पुढे 11 नंतर हजर राहण्यात येईल.</li><br/>
            <li>जर एखाद्या कर्मचाऱ्याला सुट्टी पाहिजे असल्यास त्याने दोन दिवस आगोदर लेखी अर्ज देणे बंधनकारक आहे. व बाहेरगावी असल्यास डिपार्टमेंट हेड ला मेल द्वारे परवानगी घ्यावी.</li><br/>
            <li>जर एखाद्याला हॉस्पिटल कारणापोटी सुट्टी हवी असेल त्याने डिपार्टमेंट हेड ला सुट्टी मेल/ फोन वर सांगावे व सुट्टी घेत असाल तर आपल्या सहकाऱ्यांना कामाची जबाबदारी व माहिती द्यावी.</li><br/>
            <li>जर एखाद्याने न सांगता सुट्टी घेतली असल्यास त्याला प्रत्येक दिवसाचा 500 रुपये दंड लागेल.</li><br/>
            <li>प्रत्येकाने ऑफिस च्या वेळेत ऑफिस च्या व्यतिरिक्त कोणतेही वैयक्तिक काम करावयाचे नाही आढळल्यास 100/- रुपये दंड घेण्यात येईल.</li><br/>
            <li>दुपारी जेवण्यासाठी १:०० ते १:३० तासाचा वेळ असून त्याच्यामध्ये तुम्ही वैयक्तिक कॉलिंग, व्हॉट्सअप, फेसबुक इ. करू शकता.</li><br/>
            <li>ऑफिस मध्ये येताना सर्वांनी युनिफॉर्म स्वच्छ, इस्त्री केलेला व इन शर्ट केलेला असावा तसे नसल्यास 100/- रुपये दंड घेण्यात येईल.</li><br/>
            <li>सर्वांनी वैयक्तिक स्वच्छता जसे नखे, केस, दाढी, बूटाना पॉलिश इ. काळजीपूर्वक असावी नसल्यास 100/- रुपये दंड घेण्यात येईल.</li><br/>
            <li>ऑफिस मध्ये सर्वांशी आदराने बोलावे व मोठ्याने बोलू नये, एकमेकांच्या हट्टाला करू नये, जर असे झाल्यास 200/- दंड घेण्यात येईल.</li><br/>
            <li>एखाद्या कर्मचाऱ्याकडून कंपनीच्या कोणत्याही मालमत्तेची हानी झाली असल्यास त्याची भरपाई करून द्यावी.</li><br/>
            <li>एखाद्या कर्मचाऱ्याने ऑफिस मध्ये किंवा बाहेर नशापाणी, मशवारी गाळ, मारहाण, चोरीचे प्रकार आढळून आल्यास जॉब वरून काढून टाकण्यात येईल. (एक सुधारण्यासाठी संधी दिली जाईल) व त्या महिन्याचे पगार मिळणार नाही.</li><br/>
            <li>एखाद्या कर्मचाऱ्याला जॉब सोडायचा असल्यास त्याने 1 महिना आगोदर लेखी अर्ज देणे.</li><br/>
            <li>प्रत्येकाचे पेमेंट 10 तारखेलाच होईल.</li><br/>
            <li>ऑफिस मधील कोणत्याही कर्मचाऱ्याने आपल्या वैयक्तिक घरच्या गोष्टी विषयी चर्चा करायची नाही अस आढळून आल्यास चर्चा करणाऱ्यांना जॉब वरून काढून टाकण्यात येईल व एक महिन्याचे पेमेंट मिळणार नाही.</li><br/>
            <li>आपल्या पोस्ट व्यतिरिक्त गरज पडल्यास तसे काम मंजुरी घेऊन करावे लागेल. सर्व दंड महिन्याच्या पगारातून कपात करून मिळालेला पगार देण्यात येईल. दंड कपात करताना कोणत्याही प्रकारची तक्रार करू नये व दंड तपासून घ्यावा.</li><br/>
            <li>ऑफिस मध्ये हाताळलेल्या वस्तू व्यवस्थित ठेवाव्यात व कोणत्याही वस्तू घरी घेऊन जावू नये.</li><br/>
            <li>एखाद्या सणाला कंपनीच्या नवीन प्रोजेक्टचे लाँचिंग असल्यास त्या कार्यक्रमाला उपस्थित राहणे गरजेचे आहे व त्या दिवसाची सुट्टी कार्यक्रमानंतर एक महिन्याच्या आत भरून देण्यात येईल.</li><br/>
            <li>आठवड्याची सुट्टी आहे - जुन्या कर्मचाऱ्यांसाठी रविवार, नवीन कर्मचाऱ्यांसाठी शनिवार राहील.</li><br/>
          </ol>

        <div className="mt-8 text-center">
  <p>मी</p>
  <p className="mt-4">
    ___________________________________________________________
    <br />
    वरील सर्व नियम व अटी मान्य करत आहे व सर्व नियम व अटींनुसार काम करण्याची माझी तयारी आहे.
  </p>
  <p className="mt-4">नाव – {formData.name || 'N/A'}</p>
  <p className="mt-2">पदनाव – {formData.position || 'N/A'}</p>

  <div className="mt-8 flex flex-col md:flex-row justify-center items-start gap-16 text-left">
    {/* Employee Signature */}
    <div className="text-center">
      <p className="font-semibold">कर्मचारी सही –</p>
      {signatureEmployee ? (
        <img
          src={signatureEmployee}
          alt="कर्मचारी सही"
          className="mt-4 mx-auto w-32 h-auto object-contain"
        />
      ) : (
        <p className="mt-4 text-sm text-gray-600">_________________________</p>
      )}
    </div>

    {/* Department Head Signature */}
    <div className="text-center">
      <p className="font-semibold">डिपार्टमेंट हेड सही –</p>
      {signatureHead ? (
        <img
          src={signatureHead}
          alt="डिपार्टमेंट हेड सही"
          className="mt-4 mx-auto w-32 h-auto object-contain"
        />
      ) : (
        <p className="mt-4 text-sm text-gray-600">_________________________</p>
      )}
    </div>
  </div>
</div>

        </div>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all duration-300"
        disabled={!formData.name || !formData.date}
      >
        PDF डाउनलोड करा
      </button>
    </div>
  );
};

export default OfficeRules;