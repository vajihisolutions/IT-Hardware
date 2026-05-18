// product-data.js - All product database
const productsData = {
  1: {
    id: 1,
    name: "Titan Pro X1",
    fullName: "Titan Pro X1 – 16\" Workstation",
    price: "$2,499.00",
    oldPrice: "$2,899.00",
    sku: "TP-X1-2024",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80"
    ],
    description: "The ultimate portable workstation for engineers and designers. Features an ultra-bright ProDisplay and liquid-cooled thermals for sustained peak performance.",
    processor: "Intel Core i9-13900H, 24-Core, 5.4GHz Turbo",
    ram: "32GB / 64GB DDR5-5600",
    storage: "1TB / 2TB NVMe Gen4 SSD",
    display: "16\" ProDisplay, 3840×2400, 1600 nits, 120Hz",
    gpu: "NVIDIA RTX 4080 Mobile, 12GB GDDR6",
    battery: "99.9Wh, 140W USB-C PD Charging",
    os: "Windows 11 Pro (64-bit)",
    connectivity: "Wi-Fi 6E, Bluetooth 5.3",
    ports: "3× Thunderbolt 4, 2× USB-A 3.2, HDMI 2.1, SD Card",
    weight: "2.1 kg / 4.6 lbs",
    dimensions: "355.4 × 243.3 × 19.8 mm",
    chassis: "Magnesium-Alloy Unibody (MIL-STD-810H)",
    warranty: "2 Years Limited + 1 Year Accidental",
    features: [
      "Liquid-Cooled Thermal Architecture",
      "1600 nits Peak Brightness ProDisplay",
      "Magnesium-Alloy Unibody Construction"
    ],
    reviews: [
      { name: "James Morrison", initials: "JM", date: "2 weeks ago", rating: 5, text: "Absolutely exceptional build quality. Runs our CAD workloads at full speed for hours without thermal throttling." },
      { name: "Sarah Chen", initials: "SC", date: "1 month ago", rating: 4, text: "Excellent machine for data science and ML workflows. Pytorch training is blazing fast." },
      { name: "Raj Kumar", initials: "RK", date: "3 months ago", rating: 4.5, text: "Deployed 12 units for our engineering team. Performance is consistently reliable." }
    ]
  },
  2: {
    id: 2,
    name: "Precision 7680",
    fullName: "Precision 7680 Workstation",
    price: "$1,849.00",
    oldPrice: null,
    sku: "DP-7680-WKS",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80"
    ],
    description: "Professional workstation for CAD and engineering applications.",
    processor: "Intel Core i7-13850HX",
    ram: "32GB DDR5",
    storage: "1TB SSD RAID Ready",
    display: "15.6\" FHD+ 120Hz",
    gpu: "NVIDIA RTX 3500 Ada",
    battery: "95Wh",
    os: "Windows 11 Pro",
    connectivity: "Wi-Fi 6E, Bluetooth 5.3",
    ports: "2× Thunderbolt 4, 2× USB-A, HDMI 2.1",
    weight: "2.3 kg",
    dimensions: "356 × 242 × 22 mm",
    chassis: "Aluminum",
    warranty: "3 Years",
    features: ["ISV Certified", "ECC Memory Support", "Dell Optimizer"],
    reviews: []
  }
  // Add more products here (3, 4, 5, 6...)
};  