"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { formatPrice, formatMileage, cn } from "@/lib/utils";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Heart,
  Eye,
  X,
} from "lucide-react";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Demo data
// ---------------------------------------------------------------------------

const makes = [
  "Toyota",
  "Honda",
  "Nissan",
  "Mazda",
  "Subaru",
  "Suzuki",
  "Mitsubishi",
  "Daihatsu",
  "Lexus",
  "Isuzu",
];

const demoVehicles = [
  {
    id: "1",
    make: "Toyota",
    model: "Land Cruiser 300",
    year: 2022,
    mileage: 25000,
    displacement: "3,300cc",
    fuel: "Diesel",
    transmission: "AT",
    drive: "4WD",
    exteriorColor: "White Pearl",
    bodyType: "SUV",
    price: 6500000,
    images: ["/images/cars/toyota-land-cruiser.jpg"],
    features: [
      "Leather Seats",
      "Sunroof",
      "LED Headlights",
      "Adaptive Cruise Control",
      "Lane Departure Warning",
      "360 Camera",
      "Apple CarPlay / Android Auto",
      "Power Tailgate",
      "Heated Seats",
      "Multi-Terrain Select",
    ],
    status: "available",
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    year: 2023,
    mileage: 8000,
    displacement: "1,500cc",
    fuel: "Gasoline",
    transmission: "CVT",
    drive: "FWD",
    exteriorColor: "Silver Metallic",
    bodyType: "Sedan",
    price: 2800000,
    images: ["/images/cars/honda-civic.jpg"],
    features: [
      "Honda SENSING",
      "LED Headlights",
      "Apple CarPlay / Android Auto",
      "Push Start",
      "Auto-dimming Mirror",
      "Smart Key",
    ],
    status: "available",
  },
  {
    id: "3",
    make: "Nissan",
    model: "Note Aura",
    year: 2022,
    mileage: 18000,
    displacement: "1,200cc",
    fuel: "Hybrid",
    transmission: "CVT",
    drive: "FWD",
    exteriorColor: "Black",
    bodyType: "Hatchback",
    price: 1800000,
    images: ["/images/cars/nissan-note.jpg"],
    features: [
      "ProPILOT",
      "Around View Monitor",
      "LED Headlights",
      "Heated Seats",
      "Apple CarPlay",
    ],
    status: "available",
  },
  {
    id: "4",
    make: "Mazda",
    model: "CX-5",
    year: 2023,
    mileage: 12000,
    displacement: "2,000cc",
    fuel: "Gasoline",
    transmission: "AT",
    drive: "AWD",
    exteriorColor: "Soul Red Crystal",
    bodyType: "SUV",
    price: 3200000,
    images: ["/images/cars/mazda-cx5.jpg"],
    features: [
      "Bose Sound System",
      "Sunroof",
      "LED Headlights",
      "G-Vectoring Control Plus",
      "360 Camera",
      "Apple CarPlay / Android Auto",
      "Power Tailgate",
      "Heated Seats",
    ],
    status: "available",
  },
  {
    id: "5",
    make: "Toyota",
    model: "Prius",
    year: 2024,
    mileage: 5000,
    displacement: "1,800cc",
    fuel: "Hybrid",
    transmission: "CVT",
    drive: "FWD",
    exteriorColor: "White Pearl",
    bodyType: "Sedan",
    price: 3500000,
    images: ["/images/cars/toyota-prius.jpg"],
    features: [
      "Toyota Safety Sense",
      "Solar Roof",
      "LED Headlights",
      "Adaptive Cruise Control",
      "Apple CarPlay / Android Auto",
      "Heated Seats",
      "Head-Up Display",
    ],
    status: "available",
  },
  {
    id: "6",
    make: "Subaru",
    model: "Impreza",
    year: 2021,
    mileage: 35000,
    displacement: "1,600cc",
    fuel: "Gasoline",
    transmission: "CVT",
    drive: "AWD",
    exteriorColor: "Blue",
    bodyType: "Hatchback",
    price: 1500000,
    images: ["/images/cars/car-white.jpg"],
    features: [
      "EyeSight",
      "X-MODE",
      "LED Headlights",
      "Apple CarPlay",
    ],
    status: "available",
  },
  {
    id: "7",
    make: "Suzuki",
    model: "Jimny",
    year: 2022,
    mileage: 20000,
    displacement: "660cc",
    fuel: "Gasoline",
    transmission: "AT",
    drive: "4WD",
    exteriorColor: "Jungle Green",
    bodyType: "SUV",
    price: 2200000,
    images: ["/images/cars/car-jeep.jpg"],
    features: [
      "4WD with Low Range",
      "LED Headlights",
      "Apple CarPlay",
      "Hill Descent Control",
      "LSD",
    ],
    status: "available",
  },
  {
    id: "8",
    make: "Honda",
    model: "Fit",
    year: 2023,
    mileage: 10000,
    displacement: "1,300cc",
    fuel: "Hybrid",
    transmission: "CVT",
    drive: "FWD",
    exteriorColor: "Yellow",
    bodyType: "Hatchback",
    price: 1600000,
    images: ["/images/cars/toyota-harrier.jpg"],
    features: [
      "Honda SENSING",
      "LED Headlights",
      "Apple CarPlay",
      "Push Start",
    ],
    status: "available",
  },
  {
    id: "9",
    make: "Lexus",
    model: "RX",
    year: 2024,
    mileage: 3000,
    displacement: "2,500cc",
    fuel: "Hybrid",
    transmission: "CVT",
    drive: "AWD",
    exteriorColor: "Black",
    bodyType: "SUV",
    price: 7200000,
    images: ["/images/cars/car-luxury.jpg"],
    features: [
      "Lexus Safety System+",
      "Mark Levinson Audio",
      "Panoramic Sunroof",
      "HUD",
      "360 Camera",
      "Adaptive Cruise Control",
      "Ventilated Seats",
      "Power Tailgate",
      "Digital Key",
    ],
    status: "available",
  },
  {
    id: "10",
    make: "Mitsubishi",
    model: "Outlander",
    year: 2022,
    mileage: 28000,
    displacement: "2,400cc",
    fuel: "Gasoline",
    transmission: "CVT",
    drive: "AWD",
    exteriorColor: "Silver Metallic",
    bodyType: "SUV",
    price: 2400000,
    images: ["/images/cars/car-side-1.jpg"],
    features: [
      "MI-PILOT",
      "LED Headlights",
      "Apple CarPlay / Android Auto",
      "360 Camera",
      "Power Tailgate",
    ],
    status: "available",
  },
  {
    id: "11",
    make: "Daihatsu",
    model: "Taft",
    year: 2021,
    mileage: 22000,
    displacement: "660cc",
    fuel: "Gasoline",
    transmission: "CVT",
    drive: "4WD",
    exteriorColor: "White",
    bodyType: "SUV",
    price: 1200000,
    images: ["/images/cars/car-red.jpg"],
    features: [
      "Smart Assist",
      "LED Headlights",
      "Apple CarPlay",
    ],
    status: "available",
  },
  {
    id: "12",
    make: "Isuzu",
    model: "D-Max",
    year: 2020,
    mileage: 40000,
    displacement: "3,000cc",
    fuel: "Diesel",
    transmission: "AT",
    drive: "4WD",
    exteriorColor: "White",
    bodyType: "Pickup",
    price: 1900000,
    images: ["/images/cars/car-suv.jpg"],
    features: [
      "Traction Control",
      "LED Headlights",
      "Bluetooth",
      "Rear Camera",
      "Tow Bar",
    ],
    status: "available",
  },
];

// ---------------------------------------------------------------------------
// Filter option sets
// ---------------------------------------------------------------------------

const bodyTypes = ["Sedan", "SUV", "Hatchback", "Wagon", "Coupe", "Pickup", "Minivan", "Van"];
const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "EV"];
const transmissionTypes = ["AT", "MT", "CVT"];
const driveTypes = ["FWD", "RWD", "AWD", "4WD"];

type SortKey = "newest" | "priceLow" | "priceHigh" | "yearNew" | "mileageLow";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function VehiclesPage() {
  const t = useTranslations("vehicles");
  const ct = useTranslations("common");
  const vt = useTranslations("vehicles.vehicle");

  // Filter state
  const [searchText, setSearchText] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedDrive, setSelectedDrive] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("newest");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Filter & sort vehicles
  const filteredVehicles = useMemo(() => {
    let result = demoVehicles.filter((v) => {
      if (searchText) {
        const q = searchText.toLowerCase();
        if (
          !v.make.toLowerCase().includes(q) &&
          !v.model.toLowerCase().includes(q)
        )
          return false;
      }
      if (selectedMake && v.make !== selectedMake) return false;
      if (selectedModel && !v.model.toLowerCase().includes(selectedModel.toLowerCase())) return false;
      if (selectedBodyType && v.bodyType !== selectedBodyType) return false;
      if (selectedFuel && v.fuel !== selectedFuel) return false;
      if (selectedTransmission && v.transmission !== selectedTransmission)
        return false;
      if (selectedDrive && v.drive !== selectedDrive) return false;
      if (yearFrom && v.year < Number(yearFrom)) return false;
      if (yearTo && v.year > Number(yearTo)) return false;
      if (priceFrom && v.price < Number(priceFrom)) return false;
      if (priceTo && v.price > Number(priceTo)) return false;
      if (mileageFrom && v.mileage < Number(mileageFrom)) return false;
      if (mileageTo && v.mileage > Number(mileageTo)) return false;
      return true;
    });

    switch (sortBy) {
      case "priceLow":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        result.sort((a, b) => b.price - a.price);
        break;
      case "yearNew":
        result.sort((a, b) => b.year - a.year);
        break;
      case "mileageLow":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
      default:
        break; // "newest" = demo order
    }

    return result;
  }, [
    searchText,
    selectedMake,
    selectedModel,
    selectedBodyType,
    selectedFuel,
    selectedTransmission,
    selectedDrive,
    yearFrom,
    yearTo,
    priceFrom,
    priceTo,
    mileageFrom,
    mileageTo,
    sortBy,
  ]);

  const resetFilters = () => {
    setSearchText("");
    setSelectedMake("");
    setSelectedModel("");
    setYearFrom("");
    setYearTo("");
    setPriceFrom("");
    setPriceTo("");
    setMileageFrom("");
    setMileageTo("");
    setSelectedBodyType("");
    setSelectedFuel("");
    setSelectedTransmission("");
    setSelectedDrive("");
  };

  const hasActiveFilters =
    selectedMake ||
    selectedBodyType ||
    selectedFuel ||
    selectedTransmission ||
    selectedDrive ||
    yearFrom ||
    yearTo ||
    priceFrom ||
    priceTo ||
    mileageFrom ||
    mileageTo;

  // --- Render helpers -------------------------------------------------------

  const selectCls =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
  const labelCls = "block text-xs font-medium text-gray-500 mb-1";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-main py-8">
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-2 text-gray-600">{t("subtitle")}</p>
        </div>
      </div>

      <div className="container-main py-6">
        {/* Mobile filter toggle & sort bar */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {ct("filter")}
            {sidebarOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-primary focus:outline-none"
          >
            {(["newest", "priceLow", "priceHigh", "yearNew", "mileageLow"] as const).map(
              (key) => (
                <option key={key} value={key}>
                  {t(`sort.${key}`)}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="flex gap-6">
          {/* ---------- Sidebar filters ---------- */}
          <aside
            className={cn(
              "w-full lg:w-72 shrink-0 space-y-4",
              !sidebarOpen && "hidden lg:block",
            )}
          >
            {/* Search box */}
            <div className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder={t("search")}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Filter card */}
            <div className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  {ct("filter")}
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-primary hover:underline"
                  >
                    {ct("reset")}
                  </button>
                )}
              </div>

              {/* Make */}
              <div>
                <label className={labelCls}>{t("filters.make")}</label>
                <select
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  className={selectCls}
                >
                  <option value="">--</option>
                  {makes.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model (free text) */}
              <div>
                <label className={labelCls}>{t("filters.model")}</label>
                <input
                  type="text"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className={selectCls}
                  placeholder="e.g. Prius"
                />
              </div>

              {/* Year range */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className={labelCls}>{t("filters.yearFrom")}</label>
                  <input
                    type="number"
                    value={yearFrom}
                    onChange={(e) => setYearFrom(e.target.value)}
                    className={selectCls}
                    placeholder="2019"
                    min={1990}
                    max={2026}
                  />
                </div>
                <div>
                  <label className={labelCls}>{t("filters.yearTo")}</label>
                  <input
                    type="number"
                    value={yearTo}
                    onChange={(e) => setYearTo(e.target.value)}
                    className={selectCls}
                    placeholder="2026"
                    min={1990}
                    max={2026}
                  />
                </div>
              </div>

              {/* Price range */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className={labelCls}>{t("filters.priceFrom")}</label>
                  <input
                    type="number"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                    className={selectCls}
                    placeholder="0"
                    min={0}
                  />
                </div>
                <div>
                  <label className={labelCls}>{t("filters.priceTo")}</label>
                  <input
                    type="number"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                    className={selectCls}
                    placeholder="10,000,000"
                    min={0}
                  />
                </div>
              </div>

              {/* Mileage range */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className={labelCls}>{t("filters.mileageFrom")}</label>
                  <input
                    type="number"
                    value={mileageFrom}
                    onChange={(e) => setMileageFrom(e.target.value)}
                    className={selectCls}
                    placeholder="0"
                    min={0}
                  />
                </div>
                <div>
                  <label className={labelCls}>{t("filters.mileageTo")}</label>
                  <input
                    type="number"
                    value={mileageTo}
                    onChange={(e) => setMileageTo(e.target.value)}
                    className={selectCls}
                    placeholder="100,000"
                    min={0}
                  />
                </div>
              </div>

              {/* Body type */}
              <div>
                <label className={labelCls}>{t("filters.bodyType")}</label>
                <select
                  value={selectedBodyType}
                  onChange={(e) => setSelectedBodyType(e.target.value)}
                  className={selectCls}
                >
                  <option value="">--</option>
                  {bodyTypes.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fuel */}
              <div>
                <label className={labelCls}>{t("filters.fuel")}</label>
                <select
                  value={selectedFuel}
                  onChange={(e) => setSelectedFuel(e.target.value)}
                  className={selectCls}
                >
                  <option value="">--</option>
                  {fuelTypes.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              {/* Transmission */}
              <div>
                <label className={labelCls}>{t("filters.transmission")}</label>
                <select
                  value={selectedTransmission}
                  onChange={(e) => setSelectedTransmission(e.target.value)}
                  className={selectCls}
                >
                  <option value="">--</option>
                  {transmissionTypes.map((tr) => (
                    <option key={tr} value={tr}>
                      {tr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Drive */}
              <div>
                <label className={labelCls}>{t("filters.drive")}</label>
                <select
                  value={selectedDrive}
                  onChange={(e) => setSelectedDrive(e.target.value)}
                  className={selectCls}
                >
                  <option value="">--</option>
                  {driveTypes.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* ---------- Main content ---------- */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort bar */}
            <div className="hidden lg:flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">
                {filteredVehicles.length}{" "}
                {filteredVehicles.length === 1 ? "vehicle" : "vehicles"}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 focus:border-primary focus:outline-none"
                >
                  {(
                    ["newest", "priceLow", "priceHigh", "yearNew", "mileageLow"] as const
                  ).map((key) => (
                    <option key={key} value={key}>
                      {t(`sort.${key}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active filter chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedMake && (
                  <FilterChip
                    label={`${t("filters.make")}: ${selectedMake}`}
                    onRemove={() => setSelectedMake("")}
                  />
                )}
                {selectedBodyType && (
                  <FilterChip
                    label={`${t("filters.bodyType")}: ${selectedBodyType}`}
                    onRemove={() => setSelectedBodyType("")}
                  />
                )}
                {selectedFuel && (
                  <FilterChip
                    label={`${t("filters.fuel")}: ${selectedFuel}`}
                    onRemove={() => setSelectedFuel("")}
                  />
                )}
                {selectedTransmission && (
                  <FilterChip
                    label={`${t("filters.transmission")}: ${selectedTransmission}`}
                    onRemove={() => setSelectedTransmission("")}
                  />
                )}
                {selectedDrive && (
                  <FilterChip
                    label={`${t("filters.drive")}: ${selectedDrive}`}
                    onRemove={() => setSelectedDrive("")}
                  />
                )}
                <button
                  onClick={resetFilters}
                  className="text-xs text-primary hover:underline"
                >
                  {ct("reset")} all
                </button>
              </div>
            )}

            {/* Vehicle grid */}
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredVehicles.map((v) => (
                  <div
                    key={v.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all group"
                  >
                    {/* Vehicle image */}
                    <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                      <Image
                        src={v.images[0] || "/images/cars/car-side-1.jpg"}
                        alt={`${v.year} ${v.make} ${v.model}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      {/* Hover actions */}
                      <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500">
                          <Heart className="w-4 h-4" />
                        </button>
                        <Link
                          href={`/vehicles/${v.id}`}
                          className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-primary"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 truncate">
                        {v.year} {v.make} {v.model}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span>{formatMileage(v.mileage)}</span>
                        <span className="text-gray-300">|</span>
                        <span>{v.fuel}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400">
                            {vt("price")}
                          </span>
                          <p className="text-lg font-bold text-primary">
                            {formatPrice(v.price)}
                          </p>
                        </div>
                        <Link
                          href={`/vehicles/${v.id}`}
                          className="text-sm font-medium text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors"
                        >
                          {vt("viewDetail")}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <Search className="h-12 w-12 text-gray-300 mb-4" />
                <p className="text-lg font-medium text-gray-500">
                  {t("noResults")}
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  {ct("reset")} {ct("filter")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// FilterChip sub-component
// ---------------------------------------------------------------------------

function FilterChip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {label}
      <button onClick={onRemove} className="hover:text-primary-dark">
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}
