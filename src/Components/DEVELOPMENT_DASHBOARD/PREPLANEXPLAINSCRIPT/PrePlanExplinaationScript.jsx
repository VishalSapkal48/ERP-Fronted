import React, { useState, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../../public/Images/BoardWorksListForm/logo.png'; // Adjust path if in src

// Reusable Radio Group Component
const RadioGroup = ({ name, options, selectedValue, onChange, label, required = false }) => (
  <div className="mt-4">
    <p className="font-medium text-gray-700">{label}</p>
    <div className="flex space-x-4 mt-2">
      {options.map((option, index) => (
        <label key={index} className="flex items-center">
          <input
            type="radio"
            name={name}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="mr-1"
            aria-checked={selectedValue === option.value}
            aria-required={required}
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

// Reusable Textarea Component
const TextareaField = ({ label, value, onChange, required = false }) => (
  <div className="mt-4">
    <label className="block mb-1 text-gray-700">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="3"
      aria-required={required}
    />
  </div>
);

// Data definitions remain unchanged
const layoutData = [
  { srNo: 1, layout: { en: 'SS Layout', mr: 'एसएस लेआउट' }, status: [{ en: 'YES', mr: 'होय', value: 'YES' }, { en: 'NO', mr: 'नाही', value: 'NO' }] },
  { srNo: 2, layout: { en: 'POP Layout', mr: 'पीओपी लेआउट' }, status: [{ en: 'YES', mr: 'होय', value: 'YES' }, { en: 'NO', mr: 'नाही', value: 'NO' }] },
  { srNo: 3, layout: { en: 'Electrical Layout', mr: 'इलेक्ट्रिकल लेआउट' }, status: [{ en: 'YES', mr: 'होय', value: 'YES' }, { en: 'NO', mr: 'नाही', value: 'NO' }] },
  { srNo: 4, layout: { en: 'Plumbing Layout', mr: 'प्लंबिंग लेआउट' }, status: [{ en: 'YES', mr: 'होय', value: 'YES' }, { en: 'NO', mr: 'नाही', value: 'NO' }] },
  { srNo: 5, layout: { en: 'CCTV Layout', mr: 'सीसीटीव्ही लेआउट' }, status: [{ en: 'YES', mr: 'होय', value: 'YES' }, { en: 'NO', mr: 'नाही', value: 'NO' }] },
];

const vendorList = [
  { en: 'Electrician', mr: 'इलेक्ट्रिशियन' },
  { en: 'Plumber', mr: 'प्लंबर' },
  { en: 'Mason', mr: 'मेसन' },
  { en: 'Tile Vendor', mr: 'टाइल व्हेंडर' },
  { en: 'CCTV Vendor', mr: 'सीसीटीव्ही व्हेंडर' },
  { en: 'Gas Pipeline Vendor', mr: 'गॅस पाइपलाइन व्हेंडर' },
  { en: 'Fabricator', mr: 'फॅब्रिकेटर' },
  { en: 'Board Vendor', mr: 'बोर्ड व्हेंडर' },
  { en: 'Painter', mr: 'पेंटर' },
  { en: 'POP Vendor', mr: 'पीओपी व्हेंडर' },
  { en: 'Awning Shed Vendor', mr: 'आच्छादन शेड व्हेंडर' },
  { en: 'Ducting Vendor', mr: 'डक्टिंग व्हेंडर' },
  { en: 'Internet Installer', mr: 'इंटरनेट इंस्टॉलर' },
];

const vendorRouteMap = {
  Electrician: 'electrical-work',
  Plumber: 'plumbing-work',
  Mason: 'brick-work',
  'Tile Vendor': 'tiles-work',
  'CCTV Vendor': 'cctv-work',
  'Gas Pipeline Vendor': 'gas-pipeline-work',
  Fabricator: 'brick-work',
  'Board Vendor': 'board-work',
  Painter: 'painting',
  'POP Vendor': 'pop-vendor',
  'Awning Shed Vendor': 'awning-shed',
  'Ducting Vendor': 'ducting-work',
  'Internet Installer': 'internet-work',
};

const validationMessages = {
  en: {
    submitSuccess: 'Form submitted successfully!',
    selectOption: 'Please select an option for all fields',
    enterDate: 'Please enter a date',
    selectVendors: 'Please select at least one vendor',
  },
  mr: {
    submitSuccess: 'फॉर्म यशस्वीरित्या सबमिट झाला!',
    selectOption: 'कृपया सर्व फील्डसाठी एक पर्याय निवडा',
    enterDate: 'कृपया तारीख प्रविष्ट करा',
    selectVendors: 'कृपया किमान एक व्हेंडर निवडा',
  },
};

// Reducer for state management
const initialState = {
  layoutForm: layoutData.map(() => null),
  planForm: { planConfirmation: null, planChanges: null, suggestions: '', changes: '' },
  planningForm: { planningDate: '' },
  vendorForm: { vendors: [] },
  intimationForm: { intimation: null, vendorAvailability: null, ownerAvailability: null, responsiblePerson: null, nextDate: '' },
  challengesForm: { challengesDiscussion: '' },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LAYOUT':
      return { ...state, layoutForm: action.payload };
    case 'UPDATE_PLAN':
      return { ...state, planForm: { ...state.planForm, ...action.payload } };
    case 'UPDATE_PLANNING':
      return { ...state, planningForm: { ...state.planningForm, ...action.payload } };
    case 'UPDATE_VENDOR':
      return { ...state, vendorForm: { ...state.vendorForm, ...action.payload } };
    case 'UPDATE_INTIMATION':
      return { ...state, intimationForm: { ...state.intimationForm, ...action.payload } };
    case 'UPDATE_CHALLENGES':
      return { ...state, challengesForm: { ...state.challengesForm, ...action.payload } };
    default:
      return state;
  }
};

const PrePlanExplanationScript = () => {
  const [language, setLanguage] = useState('en');
  const [currentStep, setCurrentStep] = useState(0);
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'en' ? 'mr' : 'en'));
  };

  const handleLayoutStatus = (index, status) => {
    dispatch({
      type: 'UPDATE_LAYOUT',
      payload: state.layoutForm.map((val, i) => (i === index ? status : val)),
    });
  };

  const handlePlanChange = (field, value) => {
    dispatch({ type: 'UPDATE_PLAN', payload: { [field]: value } });
  };

  const handlePlanningChange = (field, value) => {
    dispatch({ type: 'UPDATE_PLANNING', payload: { [field]: value } });
  };

  const handleVendorToggle = (vendor) => {
    dispatch({
      type: 'UPDATE_VENDOR',
      payload: {
        vendors: state.vendorForm.vendors.includes(vendor)
          ? state.vendorForm.vendors.filter((v) => v !== vendor)
          : [...state.vendorForm.vendors, vendor],
      },
    });
  };

  const handleIntimationChange = (field, value) => {
    dispatch({ type: 'UPDATE_INTIMATION', payload: { [field]: value } });
  };

  const handleChallengesChange = (field, value) => {
    dispatch({ type: 'UPDATE_CHALLENGES', payload: { [field]: value } });
  };

  const validateStep = () => {
    switch (currentStep) {
      case 0:
        return state.layoutForm.every((status) => status !== null);
      case 1:
        return state.planForm.planConfirmation !== null;
      case 2:
        return (
          state.planForm.planChanges !== null &&
          (state.planForm.planChanges === 'NO' ||
            (state.planForm.suggestions && state.planForm.changes))
        );
      case 3:
        return state.planningForm.planningDate;
      case 4:
        return state.vendorForm.vendors.length > 0;
      case 5:
        return (
          (state.intimationForm.intimation === 'Case 1' &&
            state.intimationForm.vendorAvailability !== null &&
            state.intimationForm.nextDate) ||
          (state.intimationForm.intimation === 'Case 2' &&
            state.intimationForm.ownerAvailability !== null) ||
          (state.intimationForm.intimation === 'Case 3' &&
            state.intimationForm.responsiblePerson !== null) ||
          (state.intimationForm.intimation === 'Case 4')
        );
      case 6:
        return true; // Challenges discussion is optional
      default:
        return true;
    }
  };

  const handleNext = async () => {
    if (!validateStep()) {
      toast.error(validationMessages[language][
        currentStep === 3
          ? 'enterDate'
          : currentStep === 4
          ? 'selectVendors'
          : 'selectOption'
      ], {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      try {
        // Placeholder for API call
        console.log('Form Data Submitted:', state);
        // Example: await api.submitForm(state);
        toast.success(validationMessages[language].submitSuccess, {
          position: 'top-right',
          autoClose: 3000,
        });
      } catch (error) {
        toast.error('Failed to submit form. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const t = (key) => (typeof key === 'object' ? key[language] : key);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t({ en: 'Layout Preparation', mr: 'लेआउट तयारी' })}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">{t({ en: 'Sr. No', mr: 'अनु. क्र.' })}</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">{t({ en: 'Layout', mr: 'लेआउट' })}</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">{t({ en: 'Status', mr: 'स्थिती' })}</th>
                  </tr>
                </thead>
                <tbody>
                  {layoutData.map((item, index) => (
                    <tr key={index} className="hover:bg-blue-100 transition-colors duration-200">
                      <td className="border border-gray-300 p-3">{item.srNo}</td>
                      <td className="border border-gray-300 p-3">{t(item.layout)}</td>
                      <td className="border border-gray-300 p-3">
                        <RadioGroup
                          name={`layout-${index}`}
                          options={item.status.map((s) => ({ value: s.value, label: t(s) }))}
                          selectedValue={state.layoutForm[index]}
                          onChange={(status) => handleLayoutStatus(index, status)}
                          label=""
                          required
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t({ en: 'Plan Confirmation', mr: 'योजना पुष्टीकरण' })}</h3>
            <RadioGroup
              name="planConfirmation"
              options={[
                { value: 'YES', en: 'YES', mr: 'होय' },
                { value: 'NO', en: 'NO', mr: 'नाही' },
              ].map((opt) => ({ value: opt.value, label: t(opt) }))}
              selectedValue={state.planForm.planConfirmation}
              onChange={(value) => handlePlanChange('planConfirmation', value)}
              label={t({ en: 'Plan Confirmation done by owner?', mr: 'मालकाने योजना पुष्टीकरण केले आहे का?' })}
              required
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t({ en: 'Plan Changes', mr: 'योजना बदल' })}</h3>
            <RadioGroup
              name="planChanges"
              options={[
                { value: 'YES', en: 'YES', mr: 'होय' },
                { value: 'NO', en: 'NO', mr: 'नाही' },
              ].map((opt) => ({ value: opt.value, label: t(opt) }))}
              selectedValue={state.planForm.planChanges}
              onChange={(value) => handlePlanChange('planChanges', value)}
              label={t({ en: 'Any Changes in Plan? By owner side or vendor side', mr: 'योजनेत कोणतेही बदल? मालकाकडून किंवा व्हेंडरकडून' })}
              required
            />
            {state.planForm.planChanges === 'YES' && (
              <>
                <TextareaField
                  label={t({ en: 'Suggestions', mr: 'सूचना' })}
                  value={state.planForm.suggestions}
                  onChange={(value) => handlePlanChange('suggestions', value)}
                  required
                />
                <TextareaField
                  label={t({ en: 'Changes', mr: 'बदल' })}
                  value={state.planForm.changes}
                  onChange={(value) => handlePlanChange('changes', value)}
                  required
                />
              </>
            )}
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t({ en: 'Planning Date / Visit Date', mr: 'नियोजन तारीख / भेट तारीख' })}</h3>
            <input
              type="date"
              value={state.planningForm.planningDate}
              onChange={(e) => handlePlanningChange('planningDate', e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-required="true"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t({ en: 'Vendor List', mr: 'व्हेंडर यादी' })}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {vendorList.map((vendor, index) => {
                const vendorPath = vendorRouteMap[vendor.en] || vendor.en.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg shadow-md border ${
                      state.vendorForm.vendors.includes(vendor.en)
                        ? 'bg-blue-100 border-blue-500'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={state.vendorForm.vendors.includes(vendor.en)}
                          onChange={() => handleVendorToggle(vendor.en)}
                          className="mr-2"
                          aria-checked={state.vendorForm.vendors.includes(vendor.en)}
                        />
                        <span className="font-medium text-gray-700">{t(vendor)}</span>
                      </label>
                      <NavLink
                        to={`/development/vendor/${vendorPath}`}
                        className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        aria-label={`View form for ${t(vendor)}`}
                      >
                        {t({ en: 'View Form', mr: 'फॉर्म पहा' })}
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t({ en: 'Intimation Form', mr: 'सूचना फॉर्म' })}</h3>
            <div className="flex flex-col space-y-2">
              {[
                { value: 'Case 1', en: 'Case 1: Vendor and Owner Availability', mr: 'केस 1: व्हेंडर आणि मालक उपलब्धता' },
                { value: 'Case 2', en: 'Case 2: Owner Available but Vendor Not', mr: 'केस 2: मालक उपलब्ध परंतु व्हेंडर नाही' },
                { value: 'Case 3', en: 'Case 3: Behalf of Owner (Responsible Person)', mr: 'केस 3: मालकाच्या वतीने (जबाबदार व्यक्ती)' },
                { value: 'Case 4', en: 'Case 4: Neither Owner Nor Responsible Person', mr: 'केस 4: मालक किंवा जबाबदार व्यक्ती नाही' },
              ].map((option, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="intimation"
                    checked={state.intimationForm.intimation === option.value}
                    onChange={() => handleIntimationChange('intimation', option.value)}
                    className="mr-2"
                    aria-checked={state.intimationForm.intimation === option.value}
                    aria-required="true"
                  />
                  {t(option)}
                </label>
              ))}
            </div>
            {state.intimationForm.intimation === 'Case 1' && (
              <>
                <RadioGroup
                  name="vendorAvailability"
                  options={[
                    { value: 'YES', en: 'YES', mr: 'होय' },
                    { value: 'NO', en: 'NO', mr: 'नाही' },
                  ].map((opt) => ({ value: opt.value, label: t(opt) }))}
                  selectedValue={state.intimationForm.vendorAvailability}
                  onChange={(value) => handleIntimationChange('vendorAvailability', value)}
                  label={t({ en: 'Vendor Availability', mr: 'व्हेंडर उपलब्धता' })}
                  required
                />
                <div className="mt-2">
                  <label className="block mb-1 text-gray-700">{t({ en: 'Next Date (Vendor Confirmation)', mr: 'पुढील तारीख (व्हेंडर पुष्टीकरण)' })}</label>
                  <input
                    type="date"
                    value={state.intimationForm.nextDate}
                    onChange={(e) => handleIntimationChange('nextDate', e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-required="true"
                  />
                </div>
              </>
            )}
            {state.intimationForm.intimation === 'Case 2' && (
              <RadioGroup
                name="ownerAvailability"
                options={[
                  { value: 'YES', en: 'YES', mr: 'होय' },
                  { value: 'NO', en: 'NO', mr: 'नाही' },
                ].map((opt) => ({ value: opt.value, label: t(opt) }))}
                selectedValue={state.intimationForm.ownerAvailability}
                onChange={(value) => handleIntimationChange('ownerAvailability', value)}
                label={t({ en: 'Owner Availability', mr: 'मालक उपलब्धता' })}
                required
              />
            )}
            {state.intimationForm.intimation === 'Case 3' && (
              <RadioGroup
                name="responsiblePerson"
                options={[
                  { value: 'YES', en: 'YES', mr: 'होय' },
                  { value: 'NO', en: 'NO', mr: 'नाही' },
                ].map((opt) => ({ value: opt.value, label: t(opt) }))}
                selectedValue={state.intimationForm.responsiblePerson}
                onChange={(value) => handleIntimationChange('responsiblePerson', value)}
                label={t({ en: 'Responsible Person Availability', mr: 'जबाबदार व्यक्ती उपलब्धता' })}
                required
              />
            )}
          </div>
        );
      case 6:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{t({ en: 'Challenges Discussion', mr: 'आव्हाने चर्चा' })}</h3>
            <TextareaField
              label={t({ en: 'Challenges Discussion in internal team and corresponding team', mr: 'अंतर्गत आणि संबंधित संघासह आव्हाने चर्चा' })}
              value={state.challengesForm.challengesDiscussion}
              onChange={(value) => handleChallengesChange('challengesDiscussion', value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-blue-100 p-6 rounded-xl shadow-md">
        <div className="bg-white flex justify-between items-center mb-4 px-3 py-2 rounded">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="YNK Logo" className="h-10 w-10" aria-hidden="true" />
            <h1 className="text-xl font-bold">YNK</h1>
          </div>
          <button
            onClick={handleLanguageToggle}
            className="text-sm text-gray-600 underline hover:text-blue-600"
            aria-label={language === 'mr' ? 'Switch to English' : 'Switch to Marathi'}
          >
            {language === 'mr' ? 'English' : 'मराठी'}
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          {t({ en: 'Pre-Plan Explanation Script', mr: 'प्रि-प्लॅन स्पष्टीकरण स्क्रिप्ट' })}
        </h2>
        {renderStep()}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="text-gray-500 underline disabled:text-gray-300 hover:text-blue-600 transition-colors duration-200"
            disabled={currentStep === 0}
            aria-label={t({ en: 'Back', mr: 'मागे' })}
          >
            {t({ en: 'Back', mr: 'मागे' })}
          </button>
          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded-md font-medium text-white ${
              currentStep < 6
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-green-600 hover:bg-green-700'
            } transition-colors duration-200`}
            aria-label={t({ en: currentStep < 6 ? 'Next' : 'Submit', mr: currentStep < 6 ? 'पुढे' : 'सबमिट करा' })}
          >
            {t({ en: currentStep < 6 ? 'Next' : 'Submit', mr: currentStep < 6 ? 'पुढे' : 'सबमिट करा' })}
          </button>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default PrePlanExplanationScript;