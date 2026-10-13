import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Select from "react-select";
import {
  FiX,
  FiCalendar,
  FiClock,
  FiUser,
  FiPhone,
  FiStar,
  FiMapPin,
} from "react-icons/fi";
import { salonServices, salonInfo } from "../data/salonData";

const timeSlots = [
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
  "07:45 PM",
];

// Format 10 parlour services into options for react-select dropdown
const serviceOptions = salonServices.map((service) => ({
  value: service.name,
  label: `${service.number}. ${service.name} (${service.category} • ${service.price})`,
  category: service.category,
  price: service.price,
  duration: service.duration,
  name: service.name,
}));

export default function BookingModal({ isOpen, onClose, initialService = "" }) {
  const todayStr = new Date().toISOString().split("T")[0];

  const defaultOption = serviceOptions.find(
    (opt) => opt.value === (initialService || "Signature Haircut & Restyling")
  ) || serviceOptions[0];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: todayStr,
    time: "05:00 PM",
    selectedServices: [defaultOption],
    notes: "",
  });

  useEffect(() => {
    if (initialService) {
      const match = serviceOptions.find((opt) => opt.value === initialService);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          selectedServices: [match],
        }));
      }
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }
    if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.selectedServices || formData.selectedServices.length === 0) {
      toast.warning("Please select at least one parlour service from dropdown.");
      return;
    }

    const serviceNames = formData.selectedServices.map((s) => s.name).join(", ");

    toast.success(
      `Chair Reserved for ${formData.fullName}! Services: ${serviceNames} on ${formData.date} at ${formData.time}. We will confirm shortly via call.`,
      { icon: "✨" }
    );

    onClose();
    setFormData({
      fullName: "",
      phone: "",
      date: todayStr,
      time: "05:00 PM",
      selectedServices: [defaultOption],
      notes: "",
    });
  };

  // Custom luxury styling for react-select dropdown
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f8fafc",
      borderColor: state.isFocused ? "#C59B27" : "#e2e8f0",
      borderRadius: "0.75rem",
      padding: "3px 4px",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(197, 155, 39, 0.2)" : "none",
      "&:hover": {
        borderColor: "#C59B27",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#ffffff",
      borderRadius: "0.75rem",
      border: "1px solid #e2e8f0",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
      zIndex: 50,
      padding: "4px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#111D35"
        : state.isFocused
        ? "#FEF9EE"
        : "transparent",
      color: state.isSelected ? "#ffffff" : "#1e293b",
      borderRadius: "0.5rem",
      margin: "2px 0",
      fontSize: "0.85rem",
      fontWeight: state.isSelected ? "600" : "500",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#111D35",
        color: "#ffffff",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#FEF9EE",
      border: "1px solid #F5E5B8",
      borderRadius: "0.5rem",
      padding: "1px 4px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#967014",
      fontSize: "0.78rem",
      fontWeight: "600",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#967014",
      "&:hover": {
        backgroundColor: "#C59B27",
        color: "#ffffff",
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-2xl rounded-3xl bg-white border border-amber-200/80 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-800"
          >
            {/* Top Gold Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#A37B19] via-[#C59B27] to-[#A37B19]" />

            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/logo.png"
                  alt="AR Unisex Salon"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#C59B27]"
                />
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#967014] font-bold flex items-center gap-1.5">
                    <FiStar className="text-xs fill-[#967014]" /> Priority Salon Concierge
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#111D35]">
                    Reserve Your Chair
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking form"
                className="w-10 h-10 rounded-full border border-stone-300 text-slate-500 hover:text-slate-900 hover:border-slate-500 flex items-center justify-center transition cursor-pointer"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Modal Body Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 overflow-y-auto space-y-5 text-left"
            >
              {/* User Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A37B19]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Aditi Sharma"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A37B19]" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 9876543210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <FiCalendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A37B19]" />
                    <input
                      type="date"
                      min={todayStr}
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <FiClock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A37B19]" />
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* REACT-SELECT DROP-DOWN LIST (DDL) FOR 10 PARLOUR SERVICES */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold">
                    Select Parlour Services (Search & Multi-Select DDL) *
                  </label>
                  <span className="text-xs text-[#A37B19] font-bold">
                    {formData.selectedServices ? formData.selectedServices.length : 0} Selected
                  </span>
                </div>

                <Select
                  isMulti
                  name="services"
                  options={serviceOptions}
                  value={formData.selectedServices}
                  onChange={(selected) =>
                    setFormData({ ...formData, selectedServices: selected || [] })
                  }
                  placeholder="Click or type to select from 10 parlour services..."
                  styles={customSelectStyles}
                  closeMenuOnSelect={false}
                  className="text-sm"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  You can select one or multiple services from the dropdown (Haircut, Keratin, Balayage, Hydra-Facial, Bridal Makeup, Nail Extensions, etc.).
                </p>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-600 font-bold mb-1.5">
                  Special Request / Stylist Note (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Any specific skin sensitivity, bridal inquiry, or preferred stylist..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#C59B27] focus:bg-white transition"
                />
              </div>

              {/* Location & Submit */}
              <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-start gap-2">
                  <FiMapPin className="text-[#A37B19] shrink-0 mt-0.5" />
                  <span>
                    {salonInfo.address} <br />
                    <strong className="text-slate-800">
                      Direct Line: {salonInfo.phoneFormatted}
                    </strong>
                  </span>
                </div>

                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C59B27] to-[#A37B19] text-white font-bold text-sm tracking-wide hover:brightness-105 transition shadow-md shrink-0 cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
