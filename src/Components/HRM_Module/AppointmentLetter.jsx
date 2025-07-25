import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import hrmApi from '../../ApiCalling/Hrm_Api';

const AppointmentLetter = () => {
  // State for form inputs and signature images
  const [formData, setFormData] = useState({
    employeeId: '',
   
    date: '2025-07-21', // Default to current date
    employeeName: '',
    address: '',
    position: '',
    startDate: '2024-11-06', // Default to 06-Nov-24
    mandatoryDocDate: '2024-01-01', // Default to Jan-24
    salary: '', // Default salary in Rs
  });
  const [signatureAuth, setSignatureAuth] = useState(null); // Authorized Signature image
  const [signatureAccepted, setSignatureAccepted] = useState(null); // Accepted signature image
  const [error, setError] = useState('');
  const [isApiData, setIsApiData] = useState(false); // Track if data is from API
  const letterRef = useRef(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'employeeId') {
      setError('');
      setIsApiData(false); // Reset API data flag when employeeId changes
    }
  };

  // Fetch employee data by employeeId
  const fetchEmployeeData = async (employeeId) => {
    if (!employeeId) {
      setFormData((prev) => ({
        ...prev,
        employeeName: '',
        address: '',
        position: '',
        startDate: prev.startDate || '2024-11-06', // Preserve manual startDate or default
        salary: prev.salary || '', // Preserve manual salary
      }));
      setError('');
      setIsApiData(false);
      return;
    }
    try {
      const employee = await hrmApi.getEmployeeById(employeeId);
      setFormData((prev) => ({
        ...prev,
        employeeName: employee.name || '',
        address: employee.address || '',
        position: employee.jobTitle || '',
        startDate: prev.startDate || (employee.hireDate ? new Date(employee.hireDate).toISOString().split('T')[0] : '2024-11-06'),
        salary: prev.salary || (employee.netSalary ? employee.netSalary.toString() : ''),
      }));
      setError('');
      setIsApiData(true); // Mark data as from API
    } catch (err) {
      setError(err.message || 'Employee not found or invalid ID');
      setFormData((prev) => ({
        ...prev,
        employeeName: '',
        address: '',
        position: '',
        startDate: prev.startDate || '2024-11-06',
        salary: prev.salary || '',
      }));
      setIsApiData(false);
    }
  };

  // Debounce fetchEmployeeData
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchEmployeeData(formData.employeeId);
    }, 500);
    return () => clearTimeout(handler);
  }, [formData.employeeId]);

  // Handle file input changes (convert to base64)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (name === 'signatureAuth') {
          setSignatureAuth(reader.result);
        } else if (name === 'signatureAccepted') {
          setSignatureAccepted(reader.result);
        }
      };
      reader.readAsDataURL(files[0]); // Convert to base64
    }
  };

  // Handle PDF download
  const handleDownloadPDF = () => {
    const input = letterRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190; // A4 width in mm, adjusted for margins
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10; // Top margin

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${formData.employeeName || 'employee'}_Appointment_Letter.pdf`);
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      {/* Input Form */}
      <div className="bg-white p-6 max-w-3xl w-full shadow-lg rounded-lg mb-6 mx-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Enter Appointment Letter Details</h2>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Employee ID (e.g., EMP123)"
            />
          </div>
          {/* <div>
            <label className="block text-sm text-gray-600 mb-1">To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Employee Name</label>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isApiData}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isApiData}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isApiData}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Mandatory Doc Date</label>
            <input
              type="date"
              name="mandatoryDocDate"
              value={formData.mandatoryDocDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Salary (Rs)</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Authorized Signature</label>
            <input
              type="file"
              name="signatureAuth"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Accepted Signature</label>
            <input
              type="file"
              name="signatureAccepted"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Letter Content */}
      <div ref={letterRef} className="bg-white p-8 max-w-3xl w-full shadow-lg rounded-lg mx-4 border border-gray-200">
        {/* Header */}
        <div className="text-center mb-8">
          <img
            src="/Images/logo.png" // Corrected path for public directory
            alt="YNK Enterprises Logo"
            className="mx-auto mb-4 w-24 h-24 object-contain"
          />
          <h1 className="text-3xl font-bold text-blue-900">YNK ENTERPRISES</h1>
          <p className="text-sm text-gray-600 mt-2">
            Office no. 307, Sr. No. 34, Crystal Square, 3rd Floor, Near Bharat Petrol Pump,
            Khadi Machine Chowk, Kondhwa, Pune-411048.
          </p>
          <p className="text-sm text-gray-600">Tel. – 2026930007</p>
        </div>
        <hr className="border-t border-gray-300 my-4" />

        {/* Letter Details */}
        <div className="flex justify-between mb-8">
          <div>
            <p className="text-sm text-gray-600">To,</p>
          
            <p className="text-sm text-gray-600">{formData.employeeName || 'N/A'}</p>
            <p className="text-sm text-gray-600">{formData.address || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Date: {formData.date || 'N/A'}</p>
          </div>
        </div>

        {/* Letter Content */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-900 text-center mb-4">
            Appointment Letter
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Dear {formData.employeeName || '[Employee Name]'},
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            We are pleased to employ you as {formData.position || '[Position]'} in our company, YNK ENTERPRISES
            Pvt Ltd, located at Pune. This letter sets out the terms of your employment and,
            along with the Company’s Policies and procedures, as amended from time to time
            (Company Policies), constitutes your employment agreement with the Company
            (Employment Agreement). In the event of a conflict between any of the terms or
            conditions contained in this Employment Agreement and those in the Company
            Policies, the terms of this Employment Agreement shall prevail.
          </p>

          {/* EMPLOYMENT */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">EMPLOYMENT</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              Your employment by the Company is effective from {formData.startDate || '[Start Date]'}.
            </li>
            <li>
              Your employment with the company is subject to:
              <ol className="list-alpha list-inside ml-4 mt-2">
                <li>The accuracy of the testimonials and information provided by you.</li>
                <li>On our receiving satisfactory references.</li>
                <li>
                  You are required to submit all mandatory documents by {formData.mandatoryDocDate || '[Mandatory Doc Date]'},
                  failing which the company reserves the right to withdraw the offer letter and cancel
                  the appointment.
                </li>
              </ol>
            </li>
            <li>On Joining, you shall report to the Director.</li>
            <li>
              If you breach any of the aforesaid conditions, this offer shall stand revoked
              automatically (whether you have accepted it or not), and if you have already
              commenced employment with the company, such employment will automatically terminate
              without giving you any claim for compensation or damages but without prejudice to
              the company's rights and remedies against you.
            </li>
          </ol>

          {/* PROBATION */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">PROBATION</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              You will serve a minimum probation period of 6 months from the date of your
              joining the company (probation). The company reserves the right to extend the
              probation period if your performance is not up to expectation. You will be deemed
              to continue on probation until your confirmation has been communicated to you in
              writing.
            </li>
            <li>
              Your performance will be evaluated according to your efficiency, punctuality,
              conduct, maintenance of discipline, and in accordance with the code of conduct of
              the company (Code of Conduct), a copy of which shall be provided by the Human
              Resource Department.
            </li>
            <br/><br/>
            <li>
              During the period of probation, your services are liable to be terminated by
              either party at any time, including in the extended period of probation, if any,
              with one month's notice or payment of salary in lieu of notice.
            </li>
          </ol>

          {/* PLACE OF POSTING */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">PLACE OF POSTING</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              Your initial place of posting shall be at Pune, Maharashtra, India. However, your
              services are transferable, and you may be assigned or transferred in India or to
              any of its group companies. It is a condition of your employment that you comply
              with any such requirements of the company. The transfer will not be deemed to
              constitute a change in your conditions of service.
            </li>
            <li>
              Notwithstanding the above, you may be required to work at any other place that
              the company may deem fit and as may be required from time to time. You may also
              be seconded or deputed to or transferred to any other company associated with the
              company, whether in India or abroad.
            </li>
            <li>
              Your place of work shall change in case of any relocation of the company’s office,
              for which you shall not be entitled to any compensation.
            </li>
          </ol>

          {/* PERFORMANCE OF DUTIES */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">PERFORMANCE OF DUTIES</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              You shall be assigned all the duties and responsibilities of your role and such
              other duties on behalf of the company as may be reasonably assigned from time to
              time by the company management.
            </li>
            <li>
              You shall at all times be required to carry out the duties and responsibilities
              assigned to you by the company faithfully and diligently, in compliance with
              established company policies and procedures, endeavoring to the best of your
              ability to protect and promote the interests of the company.
            </li>
            <li>
              You shall not, during the term of your employment, except with the written
              permission of the company, engage directly or indirectly, whether part-time or
              full-time, in any other business, occupation, or activity, whether as a principal,
              agent, or otherwise, which will be detrimental, whether directly or indirectly, to
              the company's interests. It is clarified that such written permission does not
              create any right in your favor or obligation on the company. It shall be at the
              sole and exclusive discretion of the company to grant or not grant such permission.
            </li>
            <li>
              You shall use the office of the company only for rendering the services for which
              you have been appointed. You shall not enter into any contract, commitment, or
              other understanding on behalf of the company without the written consent of the
              company.
            </li>
            <li>
              You are expected to attend the office, except when traveling on business, during
              the working hours/shifts as may be decided by the company. The company practices a
              54-hour workweek for all staff and management employees. Actual work timings or
              shifts may vary from time to time based on business and customer service requirements.
            </li>
            <li>
              You are required to comply with all company rules, regulations, and policies,
              which may be amended from time to time, and comply with the company's lawful and
              responsible instructions.
            </li>
          </ol>

          {/* COMPENSATION */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">COMPENSATION</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              As compensation for services to be rendered, you shall be paid a salary of Rs{' '}
              {formData.salary || '[Salary]'} per annum. The salary shall be payable on a monthly
              basis in arrears on or about the 10th day of the succeeding calendar month.
            </li>
            <li>
              The payment of all compensation shall be made in accordance with the relevant
              policies of the company in effect from time to time, including normal payroll
              practices, and shall be subject to income tax deduction at source as applicable.
              All requirements under Indian tax laws, including tax compliance and filing of tax
              returns, assessments, etc., of your personal income shall be fulfilled by you.
            </li>
            <li>
              The compensation paid to you has taken into consideration the status and
              responsibilities of the appointment, and as such, you will not be entitled to any
              other payment by way of any other allowances.
            </li>
            <li>
              By accepting this offer, you authorize the company to deduct from your
              remuneration or upon termination of employment, including salary in lieu of
              notice, holiday pay, and sick pay, etc., all debts owed by you to the company or
              any of its group companies or any fine imposed by the company as a discretionary
              penalty pursuant to the company’s disciplinary procedure.
            </li>
          </ol>
        <br/><br/>
          {/* REPRESENTATIONS AND WARRANTIES */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">
            REPRESENTATIONS AND WARRANTIES
          </h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              You represent and warrant to the Company that:
              <ol className="list-alpha list-inside ml-4 mt-2">
                <li>
                  You have read and fully understand all the provisions of this Agreement and
                  the Company Policies.
                </li>
                <li>
                  You are free to enter into employment with the Company without violation of
                  any third-party rights, and employment with the Company shall not result in a
                  violation of any agreement or restrictive condition that you may have with any
                  third party, including any former employers. This Agreement constitutes a valid
                  and binding obligation on you.
                </li>
                <li>
                  You are not a party to any arrangement or agreement that will compromise your
                  ability to carry out the duties for the Company.
                </li>
                <li>
                  You have not provided the Company with any false declaration or willfully
                  suppressed any material information. All information provided by you,
                  including the relieving letter from any former employer and information set
                  forth in the resume, is truthful and accurate.
                </li>
                <li>
                  You have not been arrested, convicted of, cautioned for, or charged but not
                  yet tried with any offense or crime or have any criminal record, even if you
                  are subject to a pardon, amnesty, or other similar legal action, and there is
                  no lawsuit, arbitration, administrative, or other proceeding or governmental
                  investigation pending or, to the best of your knowledge, registered against you.
                </li>
                <li>
                  You have not been the subject of any adverse court judgment that threatens your
                  solvency or substantially compromises your financial security.
                </li>
                <li>
                  You have all the necessary licenses, permissions, consents, approvals,
                  qualifications, and memberships required to perform the duties under this
                  Agreement.
                </li>
                <li>
                  You have never been suspended, censured, or otherwise subjected to any
                  disciplinary action or other proceeding, litigation, or investigation by any
                  state or governmental body or agency or any regulatory authority or
                  self-regulatory organization.
                </li>
                <li>
                  You are not in any position or circumstance that may constitute or be deemed
                  to constitute a conflict of interest with respect to the Company.
                </li>
                <li>
                  You do not hold office with any political party or any governmental or
                  non-governmental organization, whether for any political, charitable, or other
                  reasons.
                </li>
                <li>
                  You shall not engage or participate in any moneymaking scheme or proposal
                  offered by any other employee or person within the Company. In the event you
                  engage in such activities, the Company may take disciplinary action against
                  you, which may include termination of employment.
                </li>
              </ol>
            </li>
            <li>
              You understand that your employment is on the basis that the information
              submitted by you and the representations and warranties set out in Clause 6 (a)
              are true, complete, and accurate. You agree and acknowledge that if it is found
              that the information submitted is false or incomplete or that you have concealed
              certain material information that detrimentally impacts the Company, the Company
              may terminate employment without providing any notice or pay in lieu thereof.
            </li>
          </ol>
          <br/>
          {/* COMPANY POLICIES */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">COMPANY POLICIES</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              You will at all times be guided by and strictly adhere to all Company Policies, as
              amended from time to time during the course of your employment with the Company.
              The Company Policies form an integral part of this Employment Agreement, and you
              agree that should you violate the terms and conditions of any Company Policy, you
              will be liable to disciplinary action by the Company, which may extend to
              termination of your employment.
            </li>
            <li>
              You are expected to use good judgment when using social media and to ensure your
              activities do not harm the goodwill and reputation of the Company and are
              consistent with the Company’s Policies, including its Social Media Policy (as
              amended from time to time).
            </li>
            <li>
              Your social media content must reflect that it is your opinion or content and must
              not imply any connection to or origination from the Company.
            </li>
            <li>
              You shall refrain from referring to or using any confidential information
              belonging to the Company in any manner whatsoever on social media, including but
              not limited to the Company’s clients’ names.
            </li><br/><br/><br/>
            <li>
              In the event you disclose such confidential information on social media, the
              Company may take disciplinary action against you, which may include termination of
              employment.
            </li>
            <li>
              Any questions concerning the use of social media should be directed to a member of
              the HR team.
            </li>
          </ol>

          {/* CONFIDENTIALITY */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">CONFIDENTIALITY</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              During the course of your employment, you will have access to (i) confidential or
              proprietary technical, financial, marketing, manufacturing, distribution,
              personal, sensitive, or other technical or business information or trade secrets
              of the Company, including but not limited to concepts, techniques, processes,
              methods, systems, designs, clients, circuits, cost data, computer programs,
              formulae, development or experimental work, work in progress, customers and
              suppliers, as well as software for client relationship management, whether in the
              form of reports, drawings, blueprints, data, notes, and other documents and
              records, whether printed, typed, handwritten, videotaped, transmitted, or
              transcribed on data files or on any type of media; and (ii) third-party
              confidential information that the Company is obligated to treat as confidential
              (collectively, Confidential Information).
            </li>
            <li>
              You agree and undertake not to, at any time now or in the future, directly or
              indirectly, use, publish, disseminate, or otherwise reveal (or disclose in any
              manner) any Confidential Information to any third party.
            </li>
            <li>
              You will also not disclose any Confidential Information to anyone within the
              Company except on a ‘need to know’ basis.
            </li>
            <li>
              You undertake that you will, at all times, act in the best interests of the
              Company and shall not willfully do anything that will or is likely to jeopardize
              the Company’s interest, goodwill, and reputation.
            </li>
            <li>
              You will not use any of the Company’s or its clients’ information assets
              (including but not limited to desktop and laptop computers, thin clients, storage
              devices, network connections to the LAN, internet, or client systems, networks, or
              client applications) for committing acts that have the potential to directly or
              indirectly cause damage, loss of money, or damage to corporate image, reputation,
              or availability of any Company or client information or supporting assets.
            </li>
            <li>
              You shall not duplicate, reverse engineer, modify, or otherwise reproduce any
              Confidential Information. You shall also not corrupt or destroy any Confidential
              Information unless expressly authorized by the Company.
            </li>
            <li>
              You shall not permit any other person to remove any proprietary or other legends
              or restrictive notices contained in or included in any Confidential Information.
            </li>
            <li>
              You shall make no use whatsoever, directly or indirectly, of any Confidential
              Information at any time, except as required in connection with the performance of
              your duties for the Company.
            </li>
            <li>
              You shall abide by all applicable Information Security Policies of the Company,
              namely, Acceptable Use Policy, Information Classification Policy, Security Do’s
              and Don’ts, Security Policy Statement, Security Responsibilities, Security
              Briefings, and any other policy or guideline or regulation relating to Information
              Security.
            </li>
            <li>
              Nothing contained in this Agreement shall be deemed to give you any proprietary
              right whatsoever in the Confidential Information.
            </li>
            <li>
              You undertake not to publish any notice, advertisement, press release, or other
              communication related in any manner to the subject matter of this Agreement or its
              existence or otherwise to your employment with the Company or your role therein
              without obtaining the prior written consent of the Company.
            </li>
            <li>
              In the event of possession, access, and/or use of any Confidential Information by
              any third party with whom you have a nexus, it will be presumed, unless you can
              prove to the contrary, that you have breached your confidentiality obligations
              under this Agreement.
            </li>
            <li>
              You shall not disclose any Confidential Information except when such disclosure is
              mandatorily required pursuant to requirements under applicable law.
            </li>
          </ol>
           <br/><br/> <br/><br/> <br/><br/>
          {/* INTELLECTUAL PROPERTY RIGHT */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">
            INTELLECTUAL PROPERTY RIGHT
          </h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              You acknowledge that any and all intellectual property rights, including, but not
              limited to, patent rights, design rights, copyrights, database rights, trademark
              rights, chip rights, trade name rights, and know-how, ensuing in any territory or
              jurisdiction, from or in connection with the work performed by you under this
              Agreement or otherwise during your employment with the Company (IP Rights) and any
              discoveries, designs, developments, improvements, inventions (whether or not
              protectable under patent laws), works of authorship, information fixed in any
              tangible medium of expression, software (whether or not protectable under
              copyright laws), trade secrets, know-how, ideas (whether or not protectable under
              trade secret laws), trademarks, service marks, and trade names (Innovations),
              ensuing in any territory or jurisdiction, created in any way pursuant to the
              activities performed by you for the Company and/or any of its affiliates and/or
              any of the Company’s predecessors in title are exclusively vested in and owned by
              the Company or will be vested in and owned by the Company.
            </li>
            <li>
              You hereby irrevocably, perpetually, and on a worldwide basis assign to the
              Company any and all rights in their entirety related to the IP Rights and/or
              Innovations of which the Company is not already the owner, including the use and
              application thereof. You agree that where this assignment (or part thereof)
              should at any time prove to be legally invalid, you shall at such time assign such
              rights in totality, without imposing any condition thereon, to the Company by a
              separate legal instrument.
            </li>
            <li>
              Should the Company consider it necessary, you shall sign an instrument and/or any
              other document at the Company’s first request, based on which the rights referred
              to herein will be transferred irrevocably and unconditionally.
            </li>
            <li>
              Should a further instrument be required for the transfer of these rights, or the
              signature of any document, you hereby grant the Company irrevocable and
              unconditional power of attorney to draw up and sign the said instrument and/or
              other document on your behalf.
            </li>
            <li>
              Furthermore, you agree to perform all acts that the Company deems necessary or
              desirable to permit and assist the Company, at its first request and at its
              expense, in obtaining and enforcing the full benefits, enjoyment of rights, and
              title throughout the world in the IP Rights and Innovations.
            </li>
          </ol>

          {/* DISCIPLINARY ACTION PROCEDURE */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">
            DISCIPLINARY ACTION PROCEDURE
          </h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              Any breach of the company's code of conduct, failure to attain a satisfactory work
              standard, or any misconduct by you shall be a disciplinary matter. Your immediate
              superior will normally deal with minor disciplinary matters. The procedure for
              more serious offenses, including major misconduct, shall be as set out in the
              Code of Conduct.
            </li>
          </ol>

          {/* CODE OF CONDUCT */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">CODE OF CONDUCT</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              You shall abide by the company's Code of Conduct, which forms a part of this
              contract of employment. The Code of Conduct may be changed at any time at the
              discretion of the company, and the changed Code of Conduct shall thereupon bind
              you. You will also carry out and abide by any instructions or policies issued by
              the company from time to time.
            </li>
          </ol>
 <br/><br/>
          {/* TERMINATION */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">TERMINATION</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              This Agreement is terminable by either party (i) prior to completion of
              continuous employment of 6 months, with 30 days’ notice; or (ii) after completion
              of continuous employment of 6 months, by written notice of 60 days.
            </li>
            <li>
              Notwithstanding the aforesaid, the Company may terminate your employment
              forthwith without any notice, if you:
              <ol className="list-alpha list-inside ml-4 mt-2">
                <li>Are guilty of fraud or misconduct; or</li>
                <li>
                  On any other grounds on which the Company would be entitled to terminate your
                  employment forthwith under applicable law.
                </li>
              </ol>
            </li> <br/><br/>
            <li>
              In the event you fail to report to work without permission of your supervisor or
              manager for a continuous period of three (3) days and you are not contactable by
              the Company, then the abandonment process will be initiated in accordance with
              the Company’s Separation Policy, which may lead to termination of your employment
              in case you fail to resume your duties within prescribed timelines.
            </li>
          </ol>

          {/* DISPUTE RESOLUTION */}
          <h3 className="text-lg font-semibold text-blue-900 mt-6 mb-2">DISPUTE RESOLUTION</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 leading-relaxed">
            <li>
              Any matter or dispute arising in respect of your employment or under this
              Agreement will first be attempted to be settled amicably between us. In the event
              we fail to resolve the dispute amicably, then the same shall be referred to
              arbitration, and such arbitration shall be conducted in accordance with the
              provisions of the Arbitration and Conciliation Act, 1996. The arbitration shall
              be held at Pune, and proceedings shall be conducted in the English language.
            </li>
          </ol>
        </div>

        {/* Signatures */}
        <div className="flex justify-between items-center mt-8">
          <div>
            <p className="text-sm text-gray-600">Thanking you,</p>
            <p className="text-sm font-semibold text-blue-900">YNK ENTERPRISES</p>
            {signatureAuth ? (
              <img
                src={signatureAuth}
                alt="Authorized Signature"
                className="mt-4 w-32 h-auto object-contain"
              />
            ) : (
              <p className="text-sm text-gray-600 mt-4">_________________________</p>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600">Accepted:</p>
            {signatureAccepted ? (
              <img
                src={signatureAccepted}
                alt="Accepted Signature"
                className="mt-4 w-32 h-auto object-contain"
              />
            ) : (
              <p className="text-sm text-gray-600 mt-8">_________________________</p>
            )}
            <p className="text-sm text-gray-600">Date: {formData.date || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all duration-300"
        disabled={!formData.employeeName || !formData.date}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default AppointmentLetter;