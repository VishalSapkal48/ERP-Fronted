
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const TravelPolicy = () => {
  const contentRef = useRef(null);

  const downloadPDF = () => {
    const input = contentRef.current;
    if (!input) {
      console.error('Content reference is null');
      alert('Failed to generate PDF: Content not found.');
      return;
    }

    // Ensure DOM is fully rendered
    input.style.width = '210mm'; // A4 width
    input.style.padding = '10mm';
    input.style.backgroundColor = '#fff';
    
    html2canvas(input, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      logging: true,
      width: input.offsetWidth,
      height: input.offsetHeight,
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });

        const imgWidth = 190; // A4 width (210mm) minus 10mm margins
        const pageHeight = 295; // A4 height minus margins
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 10; // Top margin

        // Add first page
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if content overflows
        while (heightLeft >= 0) {
          pdf.addPage();
          position = heightLeft - imgHeight + 10;
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('YNK_Enterprise_Travel_Policy_2024_2025.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
        alert('Failed to generate PDF. Please check the console for details.');
      });
  };

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <button
        onClick={downloadPDF}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF
      </button>
      <div ref={contentRef} className="bg-white shadow rounded p-4">
        <div className="text-center mb-4">
            <img
              src="/Images/logo.png"
              alt="YNK Enterprises Logo"
              className="mx-auto mb-4 w-24 h-24 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Logo image failed to load');
              }}
            />
          </div>
        <section className="mb-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">YNK ENTERPRISE</h1>
            <h2 className="text-xl">Travel Policy - 2024 / 2025</h2>
            <br/>
          </div>

          <h3 className="text-lg font-semibold">Objective:</h3>
          <br/>
          <p>
            To provide guidelines to employees traveling and to managers approving the travel of employees pertaining to business travel. This policy outlines procedures for the approval, reimbursement, and control of travel expenses.
          </p>
          <br/>
          <p>
            <strong>Sales, Presales, Business Development, Marketing Related Travel and Expenses</strong>
          </p>
          <p><strong>Travel is categorized as:</strong></p>
          <ul className="list-disc list-inside">
            <li><strong>Local Travel:</strong> Travel that does not require an overnight stay.</li>
            <li><strong>Outstation Travel:</strong> Travel requiring an overnight stay.</li>
            <li>
              <strong>OR:</strong> Traveling less than a total distance of 120 km one side will be considered Local Travel, and any distance above 120 km one side will be considered Outstation Travel. All claims will be cleared accordingly.
            </li>
          </ul>
          <br />
          <p><strong>Home to Office Travel:</strong></p>
          <p>This travel cost is included in associates' salary, and there is no reimbursement policy for this travel.</p>
          <br />
          <p><strong>Scope:</strong></p>
          <p>
            This policy applies to all employees and trainees for internal travel arrangements on approved company business, regardless of the source of funds, duration of travel, or business purpose (e.g., conferences, visiting other companies, research, generating company income, consulting, professional development, new developments, or company expansion).
          </p>
          <p>
            <strong>Internal travel arrangements:</strong> Any traveling arrangements made by the company for employee to monitor, improve, or develop company operations.
          </p>
          <p><strong>Source of funds:</strong> The amount invested, deposited, or remitted.</p>
          <p><strong>Approved Company Business:</strong> Approved company-related work or developments related to the company.</p>
          <br />

          <h3 className="text-lg font-semibold">Authorization:</h3>
          <ol className="list-decimal list-inside">
            <li>Employees must raise a Travel Authorization Request (TAR) Annexure.</li>
            <li>Each travel must be sanctioned in advance as per the table below:</li>
          </ol>
          <br/>
          <div className="flex justify-center">
            <table className="w-[70%] mb-4 border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">For Travel By</th>
                  <th className="border border-gray-300 p-2">Sanctioned Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Dept. Head</td>
                  <td className="border border-gray-300 p-2">Director</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Others</td>
                  <td className="border border-gray-300 p-2">Department Head</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br/><br/>
          <p className="italic">

            <strong>Note:</strong> In the absence of the specified sanctioning authority, the next higher authority will sanction the travel.
          </p>
          <br />

          <h3 className="text-lg font-semibold">Proposal:</h3>
          <p>Travel Policy Rules will apply according to the following categories:</p>
          <br />
          <table className="w-full mb-4 border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Designation</th>
                <th className="border border-gray-300 p-2">Employee Category/Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Chief Executive Officer (CEO)</td>
                <td className="border border-gray-300 p-2">L-1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Regional Manager</td>
                <td className="border border-gray-300 p-2">L-2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Project Manager</td>
                <td className="border border-gray-300 p-2">L-3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Asst. Manager</td>
                <td className="border border-gray-300 p-2">L-4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Senior Executive</td>
                <td className="border border-gray-300 p-2">L-5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Executive</td>
                <td className="border border-gray-300 p-2">L-5</td>
              </tr>
            </tbody>
          </table>
          <br />

          <h3 className="text-lg font-semibold">(A) Local Travel:</h3>
          <p><strong>Conveyance:</strong></p>
          <p>Employees will use the mode of conveyance as per the table below:</p>
          <ol className="list-decimal list-inside">
            <li>Usage of own vehicle for official purposes:</li>
          </ol>
          <br/>
          <table className="w-full mb-4 border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Vehicle Type</th>
                <th className="border border-gray-300 p-2">Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Four Wheeler</td>
                <td className="border border-gray-300 p-2">Rs. 5 per km</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Two Wheeler</td>
                <td className="border border-gray-300 p-2">Rs. 3 per km</td>
              </tr>
            </tbody>
          </table>
          <p>1. Four-wheeler reimbursement is applicable only for Categories L-1, L-2, and L-3 (on approval basis).</p>
          <p>2. Employees are eligible for reimbursement only upon submission of original petrol bills along with the Tour Expense Statement.</p>
          <p>3. Employees of all categories are eligible for reimbursement of travel expenses incurred on public transport for official purposes (e.g., office meetings, shop visits, shop operation visits) at actual costs. Ticket copies must be enclosed with the statement.</p>
          <p>4. The Local Travel Expense Statement must be submitted to the Accounts Department within 7 days of travel after obtaining approval from the reporting senior. Claims typically take 15 business days to settle.</p>
          <br />

          <h3 className="text-lg font-semibold">Meal Allowance in Overtime or Local Travel (Only for Field Work):</h3>
          <p>Meal allowance will be paid as per the table below:</p>
          <br/>
          <table className="w-full mb-4 border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Grade</th>
                <th className="border border-gray-300 p-2">Working Hours</th>
                <th className="border border-gray-300 p-2">Allowance (in Rupees)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Lara-4</td>
                <td className="border border-gray-300 p-2">More than 4 hours and less than 8 hours</td>
                <td className="border border-gray-300 p-2">Rs. 90/-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-5</td>
                <td className="border border-gray-300 p-2">More than 4 hours and less than 8 hours</td>
                <td className="border border-gray-300 p-2">Rs. 60/-</td>
              </tr>
            </tbody>
          </table>
          <br/><br/><br/><br/>
          <p><strong>Note:</strong> The entitlements shown above are inclusive of all taxes and discounts.</p>
          <br />

          <h3 className="text-lg font-semibold">(B) Outstation Travel:</h3>
          <p>
            1. A Travel Authorization Request (TAR) is mandatory before raising a requisition for travel tickets. If the immediate superior or Department Head is unavailable and the travel is urgent, email approval is required prior to starting the requisition process. This must be regularized at the earliest opportunity.
          </p>
          <br />

          <h3 className="text-lg font-semibold">Tour, Travel, and Daily Allowance Rules on Official Tours:</h3>
          <p><strong>1. Employees are entitled to the mode of travel as per the table below:</strong></p>
            <br/>
          <table className="w-full mb-4 border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Grade</th>
                <th className="border border-gray-300 p-2">Designation</th>
                <th className="border border-gray-300 p-2">Entitlement (Class of Travel) Train</th>
                <th className="border border-gray-300 p-2">Entitlement (Class of Travel) Flight</th>
                <th className="border border-gray-300 p-2">Local Conveyance</th>
                <th className="border border-gray-300 p-2">Meal Entitlement/Day/City-wise (in Rupees)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">L-1</td>
                <td className="border border-gray-300 p-2">CEO</td>
                <td className="border border-gray-300 p-2">AC Business (Below 600km)</td>
                <td className="border border-gray-300 p-2">Flight Business Class (Above 600km)</td>
                <td className="border border-gray-300 p-2">Four-wheeler rates as per entitlement</td>
                <td className="border border-gray-300 p-2">Actual cost</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-2</td>
                <td className="border border-gray-300 p-2">Regional Manager</td>
                <td className="border border-gray-300 p-2">AC Business (Below 600km)</td>
                <td className="border border-gray-300 p-2">Eligible on approval</td>
                <td className="border border-gray-300 p-2">Four-wheeler rates as per entitlement</td>
                <td className="border border-gray-300 p-2">Tier-1: Rs.600/-, Tier-2: Rs.500/-, Tier-3: Rs.400/-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-3</td>
                <td className="border border-gray-300 p-2">Area Manager</td>
                <td className="border border-gray-300 p-2">AC Business (Below 600km)</td>
                <td className="border border-gray-300 p-2">Eligible on approval</td>
                <td className="border border-gray-300 p-2">Four-wheeler rates as per entitlement</td>
                <td className="border border-gray-300 p-2">Tier-1: Rs.550/-, Tier-2: Rs.450/-, Tier-3: Rs.350/-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-4</td>
                <td className="border border-gray-300 p-2">Assistant Manager</td>
                <td className="border border-gray-300 p-2">Non-AC Business</td>
                <td className="border border-gray-300 p-2">Eligible on approval</td>
                <td className="border border-gray-300 p-2">Two-wheeler or local transport</td>
                <td className="border border-gray-300 p-2">Tier-1: Rs.400/-, Tier-2: Rs.350/-, Tier-3: Rs.300/-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-5</td>
                <td className="border border-gray-300 p-2">Business Development Executive</td>
                <td className="border border-gray-300 p-2">Non-AC Business</td>
                <td className="border border-gray-300 p-2">Eligible on approval</td>
                <td className="border border-gray-300 p-2">Two-wheeler or local transport</td>
                <td className="border border-gray-300 p-2">Tier-1: Rs.350/-, Tier-2: Rs.300/-, Tier-3: Rs.250/-</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Note:</strong> The entitlements shown above are inclusive of all taxes and discounts.</p>
          <ol className="list-decimal list-inside">
            <li>If total travel is less than 200 km, meal allowance is not allowed.</li>
            <li>If total travel is between 200 km and 500 km, meal allowance is 50%.</li>
            <li>If total travel is more than 500 km, meal allowance is 100%.</li>
          </ol>
          <p>1. Air travel is permitted if the rail journey exceeds 12 hours, subject to approval.</p>
          <p>2. Employees in Categories L-2, L-3, L-4, and L-5 are eligible for air travel only with prior approval from the reporting authority.</p>
          <p>
            3. For outstation journeys, Categories L-2 and L-3 can hire a taxi service based on the following rates:
            <ul className="list-disc list-inside">
              <li>Category L-2: Rs. 10/- per km taxi service</li>
              <li>Category L-3: Rs. 8/- per km taxi service</li>
            </ul>
          </p>
          <br />

          <h3 className="text-lg font-semibold">2. Hotel Room and Tariff Entitlement (Arranged by Admin Department):</h3>
          <br/>
          <table className="w-full mb-4 border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Grade</th>
                <th className="border border-gray-300 p-2">Tier 1 (A)</th>
                <th className="border border-gray-300 p-2">Tier 2 (B)</th>
                <th className="border border-gray-300 p-2">Tier 3 (C)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">L-1</td>
                <td className="border border-gray-300 p-2">As Per Actual</td>
                <td className="border border-gray-300 p-2">As Per Actual</td>
                <td className="border border-gray-300 p-2">As Per Actual</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-2</td>
                <td className="border border-gray-300 p-2">Rs. 2000/-</td>
                <td className="border border-gray-300 p-2">Rs. 1600/-</td>
                <td className="border border-gray-300 p-2">Rs. 1200/-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-3</td>
                <td className="border border-gray-300 p-2">Rs. 1800/-</td>
                <td className="border border-gray-300 p-2">Rs. 1400/-</td>
                <td className="border border-gray-300 p-2">Rs. 1000/-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-4</td>
                <td className="border border-gray-300 p-2">Rs. 1400/-</td>
                <td className="border border-gray-300 p-2">Rs. 1200/-</td>
                <td className="border border-gray-300 p-2">Rs. 900/-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">L-5</td>
                <td className="border border-gray-300 p-2">Rs. 1200/-</td>
                <td className="border border-gray-300 p-2">Rs. 1000/-</td>
                <td className="border border-gray-300 p-2">Rs. 800/-</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            Employees making their own arrangements for stay with family or friends in the city of visit are entitled to 60% of the total amount for hotel stay and daily allowance. In such cases, no bill submission is required.
          </p>
          <p>
            The Tour Expense Statement must be submitted to the Accounts Department within 7 days of the tour after obtaining approval from the reporting senior. Claims typically take 5-6 business days to settle after submission.
          </p>
          <p><strong>Note:</strong> The entitlements shown above are inclusive of all taxes and discounts.</p>
           <br/>
         
          <p><strong>Tier 1 (A) Class Cities:</strong><br/> Ahmedabad, Bangalore, Chennai, Gurgaon, Hyderabad, Kolkata, Mumbai, New Delhi, Noida, Pune</p>
          <p>

            <strong>Tier 2 (B) Class Cities:</strong><br/> All other state capitals and Agra, Allahabad, Aligarh, Aurangabad, Agartala, Amritsar, Amaravati, Ambala, Bareilly, Bellary, Belgaum, Bhopal, Bhubaneswar, Chandigarh, Coimbatore, Cochin, Devanagari, Dehradun, Ghaziabad, Gorakhpur, Guwahati, Gulbarga, Goa, Gangtok, Haldwani, Haridwar, Kanpur, Moradabad, Nainital, Pondicherry, Rohtak, Indore, Jaipur, Kolhapur, Kota, Jalandhar, Jamshedpur, Jamnagar, Jammu, Jodhpur, Ludhiana, Mysore, Nashik, Nagpur, Patna, Raipur, Ranchi, Sholapur, Salem, Surat, Srinagar (J&K), Siliguri, Shillong, Thane, Tiruchirappalli, Trivandrum, Udaipur, Vijayawada, Visakhapatnam, Varanasi, Vadodara, Vellore
          </p>
          <p><strong>Tier 3 (C) Class Cities:</strong><br/> Cities other than those mentioned above.</p>
          <br />
      
          <strong>Note: (For Local & Outstation Travel, Daily Allowance, Hotel Room & Tariff Entitlement)</strong>
          
          
          <br />
          <h3 className="text-lg font-semibold">Additional Policies:</h3><br />
          <ol className="list-decimal list-inside">
            <li>If an employee fails to submit the expense report by end of every week and usually it should take 15 business days to settle the claim.</li><br />
            <li>All the official tours should be approved by the reporting authority (in written) either on the same date or one day before the tour. In case of any unapproved tours the company shall not be liable to clear any of your claims.</li><br />
            <li>Any claims without genuine bills will not be reimbursed. For exceptions like food bought in train/from small vendors, you may attach a hand written note.</li><br />
            <li>Claims for vehicle maintenance and vehicle parking charges are not permitted.</li><br />
            <li>Business Visit to Home Town - All Other Tour Expenses & Fixed Daily Allowance as applicable in H. Q. will be allowed.</li><br />
            <li>While submitting the Tour expense statement it is mandatory to attach the written approval of your reporting authority.</li><br />
            <li>Company will not entertain the claims/expenses older than two months.</li><br />
            <li>Bill date should not be older than two months.</li><br />
            <li>Original Bills need to be submitted; Xerox copies etc. will not be accepted.</li><br />
            <li>Immediate reporting authority need to approve the Claims.</li><br />
            <li>Staff found guilty of any unethical practices will be dealt seriously. For example, if any staff traveling without prior notice, 1st two times warning letters and if continues then management call. Bill should be submit on WhatsApp if Employee is not able to come within Stipulated Time.</li><br />
          </ol>
          <br />

          <strong>Reimbursement Process</strong>
          <p>We are supposed to submit the reimbursement claim within 7 working days of coming back from the trip or every 7 days for longer travels.</p>
          <br />

          <p className="italic">
            <strong>Note:</strong> This policy may be modified in near future General
          </p>
          <p>
            This policy outlines the spirit behind the Company’s approach in giving fair and consistent treatment to all employees. Therefore, employees are expected to respect the rules and the standard operating procedures governing this policy. Where circumstances are unusual or situations not anticipated or defined in this policy, such matters should be referred to the HR for resolution in a manner that is consistent with the whole aim and spirit of this policy. Such decisions shall be final and binding.
            This policy supersedes all other policies, procedures and practices prevalent on this subject to date. Company reserves the right to add to, alter or amend, or cancel this policy at its discretion if needed in future.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TravelPolicy;
 