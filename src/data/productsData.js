import {
  MdHealthAndSafety,
  MdVisibility,
  MdOutlineHealthAndSafety,
  MdLocalHospital,
  MdOutlinePsychology,
  MdOutlineWaterDrop,
  MdOutlineDirectionsWalk,
  MdOutlineAutoAwesome,
  MdOutlineTipsAndUpdates,
  MdBloodtype,
} from "react-icons/md";

import { BiDroplet, BiSolidShow, BiHappyHeartEyes } from "react-icons/bi";
import {
  GiThermometerCold,
  GiPin,
  GiVomiting,
  GiLightningTrio,
  GiSittingDog,
  GiWaterDrop,
  GiWalk,
  GiHealthIncrease,
  GiNightSleep,
  GiHeadbandKnot,
  GiHeartPlus,
  GiMeal,
  GiBabyBottle,
  GiHerbsBundle,
  GiChest,
  GiDroplets,
  GiHealing,
  GiBodyBalance,
  GiEnergyArrow,
  GiGrowth,
  GiFruitBowl,
  GiBoneKnife,
  GiMuscleUp,
  GiDrop,
  GiBlood,
  GiBrain,
  GiElectric,
  GiStomach,
  GiKidneys,
  GiToothbrush,
  GiBubbles,
  GiKneeCap,
  GiHealthCapsule,
  GiLightningArc,
  GiFishEggs,
  GiLifeBar,
  GiMedicines,
  GiJoint,
  GiLever,
  GiMale,
  GiSpermWhale,
  GiFemale,
  GiHeartBottle,
  GiIncense,
  GiMicroscope,
  GiHealthNormal,
  GiHealingShield,
  GiEyeShield,
} from "react-icons/gi";
import {
  FaEye,
  FaRegCheckCircle,
  FaChild,
  FaUtensils,
  FaBrain,
  FaBaby,
  FaLeaf,
  FaTint,
  FaBolt,
  FaHeartbeat,
  FaShieldAlt,
  FaBone,
  FaBalanceScale,
  FaRegSmile,
} from "react-icons/fa";

export const productsData = [
  {
    id: 1,
    name: "RENA-DOX",
    department: "Internal Medicine",
    type: "Food Supplement",
    brand: "Randox",
    image: "/p1.png",
    shortDesc:
      "A food supplement that supports kidney health by preventing crystal formation, reducing oxalate levels, and helping break down kidney stones. Ideal for urinary tract infections (UTIs).",
    fullDesc: {
      about: [
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Supports Kidney Function",
          text: "Helps in maintaining kidney health and preventing the formation of harmful crystals in the urinary tract.",
        },
        {
          icon: <BiDroplet className="text-[#013E5D]" size={24} />,
          title: "Reduces Oxalate Accumulation",
          text: "Formulated to assist in breaking down oxalate build-up which may lead to kidney stone formation.",
        },
        {
          icon: <GiHealing className="text-[#013E5D]" size={24} />,
          title: "Relieves Discomfort",
          text: "Provides relief from discomfort caused by urinary tract infections and kidney stones.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Safe & Effective",
          text: "Clinically formulated to be used safely as a dietary supplement with proven kidney-supportive benefits.",
        },
      ],
      usage: [
        "Take 1 tablet twice daily after meals or as prescribed by your physician.",
        "Do not exceed the recommended dose.",
        "Maintain hydration during use.",
        "Consult your healthcare provider if symptoms persist.",
      ],
    },
    category: "Urology",
  },
  {
    id: 2,
    name: "PREGNADOX",
    type: "Prenatal Supplement",
    department: "Gynecology",
    brand: "Randox",
    image: "/p2.png",
    shortDesc:
      "A carefully formulated prenatal supplement that provides a balanced blend of 10 essential vitamins and minerals to support mother and baby during pregnancy.",
    fullDesc: {
      about: [
        {
          icon: <GiHeartPlus className="text-[#013E5D]" size={24} />,
          title: "Supports Maternal Health",
          text: "Provides essential nutrients to support the well-being of pregnant women throughout all stages of pregnancy.",
        },
        {
          icon: <GiMeal className="text-[#013E5D]" size={24} />,
          title: "Balanced Nutrition",
          text: "Contains a precise balance of 10 key vitamins and minerals, including folic acid and iron.",
        },
        {
          icon: <GiBabyBottle className="text-[#013E5D]" size={24} />,
          title: "Supports Baby's Development",
          text: "Helps in the healthy growth and development of the baby, especially during critical stages.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Gentle on Stomach",
          text: "Depot technology ensures gradual release of nutrients to enhance absorption and minimize discomfort.",
        },
      ],
      usage: [
        "Take 1 tablet daily with a main meal.",
        "Swallow with water, do not chew.",
        "Do not exceed the recommended daily dose.",
        "Suitable for use throughout all stages of pregnancy.",
      ],
    },
    category: "Gynecology",
  },
  {
    id: 3,
    name: "PROSPODOX",
    type: "Cough Syrup",
    department: "Internal Medicine",
    brand: "Randox",
    image: "/p3.png",
    shortDesc:
      "An effective herbal syrup made with ivy leaf dry extract to relieve cough, loosen mucus, and support respiratory health. Alcohol-free and sugar-free.",
    fullDesc: {
      about: [
        {
          icon: <GiHerbsBundle className="text-[#013E5D]" size={24} />,
          title: "Natural Ivy Leaf Extract",
          text: "Contains dry extract of ivy leaves, known for their expectorant and anti-inflammatory properties.",
        },
        {
          icon: <GiChest className="text-[#013E5D]" size={24} />,
          title: "Relieves Cough",
          text: "Helps to ease both dry and productive coughs by loosening mucus and improving airflow.",
        },
        {
          icon: <GiDroplets className="text-[#013E5D]" size={24} />,
          title: "Alcohol & Sugar Free",
          text: "Gentle on the stomach and safe for regular use with no added alcohol or sugar.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Depot Technology",
          text: "Ensures gradual release for sustained action and longer relief duration.",
        },
      ],
      usage: [
        "Shake well before use.",
        "Take the recommended dose using the measuring cup.",
        "Can be taken with or without food.",
        "Use regularly until symptoms improve or as advised by your doctor.",
      ],
    },
    category: "Pulmonology",
  },
  {
    id: 4,
    name: "VITADOX",
    type: "Multivitamin Supplement",
    department: "Internal Medicine",
    brand: "Randox",
    image: "/p4.png",
    shortDesc:
      "A complete daily multivitamin and mineral supplement designed to support immunity, energy, metabolism, vision, and overall wellness.",
    fullDesc: {
      about: [
        {
          icon: <GiEnergyArrow className="text-[#013E5D]" size={24} />,
          title: "Energy & Metabolism Support",
          text: "Helps convert food into energy and supports healthy metabolism with B-complex vitamins.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Immunity Boost",
          text: "Includes antioxidants such as Vitamins C and E to strengthen the immune system.",
        },
        {
          icon: <BiSolidShow className="text-[#013E5D]" size={24} />,
          title: "Vision Support",
          text: "Contains Vitamin A and Zinc which contribute to the maintenance of normal vision.",
        },
        {
          icon: <GiBodyBalance className="text-[#013E5D]" size={24} />,
          title: "Bone & Skin Maintenance",
          text: "With Vitamin D and Biotin to maintain healthy bones, skin, and nails.",
        },
      ],
      usage: [
        "Take 1 tablet daily with food.",
        "Swallow with water, do not chew.",
        "Do not exceed the recommended dose.",
        "Best taken at the same time each day.",
      ],
    },
    category: "General Health",
  },
  {
    id: 5,
    name: "VITADOX WITH LYSINE",
    type: "Multivitamin Syrup",
    department: "Internal Medicine",
    brand: "Randox",
    image: "/p5.png",
    shortDesc:
      "A multivitamin and multimineral syrup with Lysine, specially designed to support healthy growth, appetite, and immunity in children.",
    fullDesc: {
      about: [
        {
          icon: <GiGrowth className="text-[#013E5D]" size={24} />,
          title: "Promotes Healthy Growth",
          text: "Enriched with Lysine, an essential amino acid that helps in protein synthesis and supports healthy development in children.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Immune System Support",
          text: "Packed with key vitamins and minerals to strengthen immunity and overall health.",
        },
        {
          icon: <GiFruitBowl className="text-[#013E5D]" size={24} />,
          title: "Child-Friendly Formula",
          text: "Strawberry flavored and free from lactose, gluten, alcohol, and artificial ingredients.",
        },
        {
          icon: <BiSolidShow className="text-[#013E5D]" size={24} />,
          title: "Appetite Enhancer",
          text: "Helps stimulate healthy appetite in children with poor eating habits.",
        },
      ],
      usage: [
        "Shake well before use.",
        "Use the recommended dose based on age, as directed by a healthcare professional.",
        "Can be taken with or without food.",
        "Do not exceed the recommended dose.",
      ],
    },
    category: "Pediatrics",
  },
  {
    id: 6,
    name: "OSTEODOX",
    type: "Bone Health Syrup",
    department: "Orthopedic",
    brand: "Randox",
    image: "/p6.png",
    shortDesc:
      "A complete bone health syrup with Calcium, Magnesium, Zinc, and Vitamin D to support bone density, strength, and joint mobility.",
    fullDesc: {
      about: [
        {
          icon: <GiBoneKnife className="text-[#013E5D]" size={24} />,
          title: "Strengthens Bones",
          text: "Provides essential nutrients like calcium and vitamin D to enhance bone formation and prevent bone loss.",
        },
        {
          icon: <GiMuscleUp className="text-[#013E5D]" size={24} />,
          title: "Supports Muscle Function",
          text: "Magnesium and zinc contribute to better nerve signaling and muscle contraction.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Improves Bone Density",
          text: "Formulated to promote bone mineralization and help reduce the risk of osteoporosis.",
        },
        {
          icon: <GiBoneKnife className="text-[#013E5D]" size={24} />,
          title: "Ideal for All Ages",
          text: "Suitable for growing children, adults, and seniors in need of bone health support.",
        },
      ],
      usage: [
        "Shake well before use.",
        "Take the recommended dose as prescribed or mentioned on the package.",
        "Can be taken with meals for better absorption.",
        "Use daily for best results.",
      ],
    },
    category: "Orthopedics",
  },
  {
    id: 7,
    name: "HAEMADOX",
    type: "Iron Supplement Syrup",
    department: "Internal Medicine",
    brand: "Randox",
    image: "/p7.png",
    shortDesc:
      "An iron-rich syrup with essential vitamins and trace elements to support red blood cell production and combat fatigue.",
    fullDesc: {
      about: [
        {
          icon: <GiBlood className="text-[#013E5D]" size={24} />,
          title: "Boosts Red Blood Cells",
          text: "Supports the normal formation of red blood cells with iron, folic acid, and B-vitamins.",
        },
        {
          icon: <GiDrop className="text-[#013E5D]" size={24} />,
          title: "Combats Fatigue",
          text: "Helps reduce tiredness and fatigue by correcting iron deficiency and improving oxygen transport.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Gentle & Tasty",
          text: "Caramel-flavored syrup that’s easy to digest and well tolerated for long-term use.",
        },
        {
          icon: <GiBlood className="text-[#013E5D]" size={24} />,
          title: "Suitable for All Ages",
          text: "Can be used by children, adults, and elderly individuals with iron deficiency or increased demand.",
        },
      ],
      usage: [
        "Shake well before use.",
        "Take the dose as directed by a healthcare professional.",
        "Can be taken with or after food.",
        "Do not exceed the stated dosage.",
      ],
    },
    category: "Hematology",
  },
  {
    id: 8,
    name: "NEURODOX",
    type: "Oral Solution (Vials)",
    department: "Neurology",
    brand: "Randox",
    image: "/p8.png",
    shortDesc:
      "Oral vitamin solution with B1, B6, and B12 to support healthy nerve function and relieve neuropathic symptoms.",
    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Supports Nerve Health",
          text: "Combines vitamins B1, B6, and B12 to maintain the proper functioning of the nervous system.",
        },
        {
          icon: <GiElectric className="text-[#013E5D]" size={24} />,
          title: "Neuropathy Relief",
          text: "Helps reduce nerve pain, tingling, and numbness caused by vitamin B deficiency.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Fast Oral Absorption",
          text: "Strawberry-flavored oral solution in vials ensures quick delivery and high bioavailability.",
        },
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Convenient Dosing",
          text: "Pre-measured vials provide accurate daily doses without the need for mixing or measuring.",
        },
      ],
      usage: [
        "Take 1 vial per day orally, or as directed by your physician.",
        "Shake the vial well before use.",
        "Do not exceed the recommended dose.",
        "Best taken after a meal for optimal absorption.",
      ],
    },
    category: "Neurology",
  },
  {
    id: 9,
    name: "FERRODOX",
    type: "Oral Solution (Vials)",
    department: "Neurology",
    brand: "Randox",
    image: "/p9.png",
    shortDesc:
      "Oral vials formulated with iron, folic acid, B6, and B12 to treat and prevent iron deficiency and related anemia.",
    fullDesc: {
      about: [
        {
          icon: <GiBlood className="text-[#013E5D]" size={24} />,
          title: "Corrects Iron Deficiency",
          text: "Ferro Gluconate delivers elemental iron to restore hemoglobin levels and treat iron-deficiency anemia.",
        },
        {
          icon: <GiDrop className="text-[#013E5D]" size={24} />,
          title: "Enhances Red Blood Cell Formation",
          text: "Includes folic acid, B6, and B12 to support healthy red blood cell production and prevent neural defects.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Easy-to-Use Oral Vials",
          text: "Pre-dosed strawberry-flavored oral vials ensure accurate dosing and high compliance.",
        },
        {
          icon: <GiBlood className="text-[#013E5D]" size={24} />,
          title: "Ideal for High-Risk Groups",
          text: "Recommended for pregnancy, menstruation, breastfeeding, and chronic blood loss.",
        },
      ],
      usage: [
        "Take 1 vial per day orally, or as prescribed by your physician.",
        "Shake well before use.",
        "Do not exceed the recommended daily intake.",
        "Preferably take after meals to reduce stomach upset.",
      ],
    },
    category: "Hematology",
  },
  {
    id: 10,
    name: "LACTODOX PLUS",
    type: "Probiotic + Zinc Supplement",
    department: "Internal Medicine",
    brand: "Randox",
    image: "/p10.png",
    shortDesc:
      "A probiotic and zinc supplement for children that supports digestive balance, immune defense, and overall gut health.",
    fullDesc: {
      about: [
        {
          icon: <GiStomach className="text-[#013E5D]" size={24} />,
          title: "Supports Gut Health",
          text: "Probiotics help restore natural gut flora and improve digestion, especially during or after antibiotic use.",
        },
        {
          icon: <GiKidneys className="text-[#013E5D]" size={24} />,
          title: "Zinc for Immunity",
          text: "Zinc plays a crucial role in enhancing immune response and reducing duration of diarrhea.",
        },
        {
          icon: <GiFruitBowl className="text-[#013E5D]" size={24} />,
          title: "Child-Friendly Sachets",
          text: "Delicious and easy-to-administer sachets designed for daily pediatric use.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Balanced Digestive Support",
          text: "Combats bloating, indigestion, and discomfort with safe, non-GMO ingredients.",
        },
      ],
      usage: [
        "Administer 1 sachet per day or as directed by your healthcare provider.",
        "Mix the contents of the sachet with water or juice.",
        "Consume immediately after mixing.",
        "Do not exceed the recommended dose.",
      ],
    },
    category: "Pediatrics",
  },
  {
    id: 11,
    name: "DEDOX",
    type: "Vitamin D3 Oral Drops",
    department: "Internal Medicine",
    brand: "Randox",
    image: "/p11.png",
    shortDesc:
      "Liquid Vitamin D3 oral drops for infants and young children to support bone growth, calcium absorption, and dental health.",
    fullDesc: {
      about: [
        {
          icon: <GiBoneKnife className="text-[#013E5D]" size={24} />,
          title: "Bone & Teeth Development",
          text: "Promotes healthy bone formation and strengthens teeth by supporting calcium and phosphorus absorption.",
        },
        {
          icon: <GiBabyBottle className="text-[#013E5D]" size={24} />,
          title: "Safe for Infants",
          text: "Specifically designed for babies from birth onwards, suitable for daily supplementation.",
        },
        {
          icon: <GiFruitBowl className="text-[#013E5D]" size={24} />,
          title: "Easy-To-Use Drops",
          text: "Pleasant-tasting formula that can be easily added to food or drinks without affecting flavor.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Prevents Deficiency",
          text: "Helps prevent vitamin D deficiency, especially in breastfed infants or those with limited sun exposure.",
        },
      ],
      usage: [
        "Use 0.5 ml daily or as directed by your pediatrician.",
        "Administer directly or mix with food or liquids.",
        "Use the dropper for accurate dosing.",
        "Shake well before each use and do not exceed the daily dose.",
      ],
    },
    category: "Pediatrics",
  },
  {
    id: 12,
    name: "IBS-CURE",
    type: "Digestive Support Capsules",
    department: "Internal Medicine",
    brand: "Randox",
    image: "/p12.png",
    shortDesc:
      "Advanced formula designed to relieve symptoms of irritable bowel syndrome (IBS) with constipation, bloating, and discomfort.",
    fullDesc: {
      about: [
        {
          icon: <GiStomach className="text-[#013E5D]" size={24} />,
          title: "IBS Relief",
          text: "Formulated to target irritable bowel syndrome symptoms including bloating, pain, and irregular bowel movements.",
        },
        {
          icon: <GiBubbles className="text-[#013E5D]" size={24} />,
          title: "Reduces Bloating & Gas",
          text: "Helps eliminate excess gas and ease abdominal pressure, restoring gut comfort.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Regulates Bowel Movements",
          text: "Promotes smoother intestinal transit and relieves constipation, even during pregnancy.",
        },
        {
          icon: <GiToothbrush className="text-[#013E5D]" size={24} />,
          title: "Safe & Gentle",
          text: "Well-tolerated herbal blend with prebiotic support, suitable for long-term use.",
        },
      ],
      usage: [
        "Take 1 capsule twice daily, preferably before meals.",
        "Swallow with water, do not chew.",
        "Do not exceed the recommended dose.",
        "For best results, maintain consistent use for at least 4 weeks.",
      ],
    },
    category: "Gastroenterology",
  },
  {
    id: 13,
    name: "JOINT-DOX",
    type: "Topical Cream",
    department: "Orthopedic",
    brand: "Randox",
    image: "/p13.png",
    shortDesc:
      "A fast-acting cream for muscle and joint pain relief. Ideal for arthritis, stiff joints, and sports-related injuries.",
    fullDesc: {
      about: [
        {
          icon: <GiKneeCap className="text-[#013E5D]" size={24} />,
          title: "Relieves Joint Pain",
          text: "Targets pain and inflammation in knees, elbows, shoulders, and other joints affected by arthritis or strain.",
        },
        {
          icon: <GiMuscleUp className="text-[#013E5D]" size={24} />,
          title: "Eases Muscle Stiffness",
          text: "Helps relax tight muscles and improves flexibility with regular use.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Fast-Acting Formula",
          text: "Absorbs quickly into the skin to provide instant cooling and soothing relief.",
        },
        {
          icon: <GiKneeCap className="text-[#013E5D]" size={24} />,
          title: "Daily Use Friendly",
          text: "Safe for long-term use and suitable for both athletes and elderly individuals.",
        },
      ],
      usage: [
        "Apply a small amount to the affected area 2-3 times daily.",
        "Massage gently until fully absorbed.",
        "Do not apply to broken or irritated skin.",
        "Wash hands after application and avoid contact with eyes.",
      ],
    },
    category: "Orthopedics",
  },
  {
    id: 14,
    name: "Neuropath",
    type: "Neuropathy Capsules",
    department: "Neurology",
    brand: "MWA Robinson",
    image: "/p14.png",
    shortDesc:
      "A neuropathic support formula designed to relieve peripheral nerve pain, promote nerve regeneration, and provide antioxidant protection.",
    fullDesc: {
      about: [
        {
          icon: <GiElectric className="text-[#013E5D]" size={24} />,
          title: "Relieves Neuropathic Pain",
          text: "Targets peripheral nerve damage and helps reduce symptoms such as tingling, burning, and numbness.",
        },
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Promotes Nerve Regeneration",
          text: "Includes active ingredients that stimulate nerve repair and improve transmission.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Antioxidant Defense",
          text: "Protects nerve cells from oxidative stress and supports long-term nervous system health.",
        },
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Supports Chronic Conditions",
          text: "Suitable for use in diabetic neuropathy, sciatica, and post-herpetic neuralgia cases.",
        },
      ],
      usage: [
        "Take 1 capsule daily after meals, or as prescribed by your doctor.",
        "Swallow with water without chewing.",
        "Do not exceed the recommended dosage.",
        "Best results with continuous use over several weeks.",
      ],
    },
    category: "Neurology",
  },
  {
    id: 15,
    name: "Caldicin",
    type: "Bone Support Capsules",
    department: "Orthopedic",
    brand: "Lacora",
    image: "/p15.png",
    shortDesc:
      "Capsules formulated with calcium, vitamin D3, and vitamin K to maintain strong bones, healthy teeth, and improve calcium absorption.",
    fullDesc: {
      about: [
        {
          icon: <GiBoneKnife className="text-[#013E5D]" size={24} />,
          title: "Maintains Bone Health",
          text: "Supports bone density and helps prevent osteoporosis through a synergistic blend of calcium, vitamin D3, and K.",
        },
        {
          icon: <GiMuscleUp className="text-[#013E5D]" size={24} />,
          title: "Supports Muscle Function",
          text: "Helps muscles function properly by ensuring optimal calcium availability in the body.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Maximizes Calcium Absorption",
          text: "Vitamin D3 enhances calcium uptake while vitamin K directs calcium to the bones instead of arteries.",
        },
        {
          icon: <GiBoneKnife className="text-[#013E5D]" size={24} />,
          title: "Daily Bone Support",
          text: "Ideal for active individuals, the elderly, and those at risk of bone mineral loss.",
        },
      ],
      usage: [
        "Take 1 capsule daily with a meal.",
        "Swallow whole with water.",
        "Do not exceed the recommended dosage.",
        "For best results, maintain adequate hydration and diet rich in calcium.",
      ],
    },
    category: "Orthopedics",
  },
  {
    id: 16,
    name: "Pregnason",
    type: "Prenatal Multivitamin Capsules",
    department: "Gynecology",
    brand: "MWA",
    image: "/p16.png",
    shortDesc:
      "Comprehensive prenatal supplement with 17 essential vitamins and minerals to support mother and baby’s health during all stages of pregnancy.",
    fullDesc: {
      about: [
        {
          icon: <GiHeartPlus className="text-[#013E5D]" size={24} />,
          title: "Full Pregnancy Support",
          text: "Expertly designed to meet nutritional needs throughout all three trimesters of pregnancy.",
        },
        {
          icon: <GiMeal className="text-[#013E5D]" size={24} />,
          title: "Balanced Formula",
          text: "Provides a careful combination of 17 vitamins and minerals, including folic acid, iron, calcium, and vitamin D.",
        },
        {
          icon: <GiBabyBottle className="text-[#013E5D]" size={24} />,
          title: "Supports Baby Development",
          text: "Encourages healthy brain, bone, and immune system development in the fetus.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Safe & Gentle",
          text: "Formulated to be gentle on the stomach and safe for daily use throughout pregnancy.",
        },
      ],
      usage: [
        "Take 1 capsule daily with a main meal.",
        "Swallow with water without chewing.",
        "Do not exceed the recommended daily dose.",
        "Start as early as pre-conception and continue through pregnancy.",
      ],
    },
    category: "Gynecology",
  },
  {
    id: 17,
    name: "Becora-plus",
    type: "Vitamin B6 & B12 Capsules",
    department: "Internal Medicine",
    brand: "Lacora",
    image: "/p17.png",
    shortDesc:
      "Capsules enriched with Vitamin B6 and B12 to support nerve repair, reduce fatigue, and help prevent facial nerve issues.",
    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Nerve Repair Support",
          text: "Promotes regeneration and healing of damaged nerves due to deficiencies or chronic stress.",
        },
        {
          icon: <GiElectric className="text-[#013E5D]" size={24} />,
          title: "Boosts Body Energy",
          text: "Vitamin B12 enhances red blood cell formation and energy metabolism, helping fight fatigue.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Neurological Protection",
          text: "Helps maintain the health of the central and peripheral nervous system.",
        },
        {
          icon: <GiElectric className="text-[#013E5D]" size={24} />,
          title: "Useful in Facial Palsy",
          text: "May be used as supportive therapy in facial nerve dysfunction like Bell’s palsy.",
        },
      ],
      usage: [
        "Take 1 capsule daily after meals or as directed by your physician.",
        "Swallow whole with water.",
        "Do not exceed the recommended dose.",
        "Best used for long-term nerve health support.",
      ],
    },
    category: "Neurology",
  },
  {
    id: 18,
    name: "Nuclomax",
    type: "Neuropathic Capsules",
    department: "Gynecology",
    brand: "Lacora",
    image: "/p18.png",
    shortDesc:
      "A specialized formula designed to manage neuropathic pain caused by diabetes, alcohol, herpes zoster, and metabolic conditions.",
    fullDesc: {
      about: [
        {
          icon: <GiElectric className="text-[#013E5D]" size={24} />,
          title: "Multi-Cause Neuropathy Support",
          text: "Effective for diabetic, alcoholic, and metabolic neuropathies, as well as neuralgia from herpes zoster.",
        },
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Reduces Nerve Pain",
          text: "Helps relieve nerve-related pain, tingling, burning, and discomfort in extremities.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "Oral Nerve Therapy",
          text: "Suitable for long-term use under medical supervision to protect and nourish damaged nerves.",
        },
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Broad-Spectrum Relief",
          text: "Can also be used in osteoarthritic neuralgia and other chronic nerve-related disorders.",
        },
      ],
      usage: [
        "Take 1 capsule once or twice daily as advised by your physician.",
        "Swallow whole with a glass of water.",
        "Do not exceed the recommended dose.",
        "Use consistently for effective relief of chronic neuropathic symptoms.",
      ],
    },
    category: "Neurology",
  },
  {
    id: 19,
    name: "Becomix-Boost",
    type: "Nerve & Energy Syrup",
    department: "Internal Medicine",
    brand: "Lacora",
    image: "/p19.png",
    shortDesc:
      "A neurotonic syrup enriched with L-Carnitine, Taurine, Methylcobalamin, and Vitamin B6 to support nerve repair, energy production, and muscle performance.",
    fullDesc: {
      about: [
        {
          icon: <GiElectric className="text-[#013E5D]" size={24} />,
          title: "Neuro-Energy Formula",
          text: "Combines key ingredients that aid in nerve regeneration and cellular energy production.",
        },
        {
          icon: <GiMuscleUp className="text-[#013E5D]" size={24} />,
          title: "Boosts Physical Strength",
          text: "L-Carnitine and Taurine enhance muscular endurance and recovery, especially during fatigue.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#013E5D]" size={24} />,
          title: "B12 & B6 for Nerve Function",
          text: "Supports nerve sheath maintenance and promotes healthier nerve conduction.",
        },
        {
          icon: <GiElectric className="text-[#013E5D]" size={24} />,
          title: "Safe for Long-Term Use",
          text: "Ideal as a general tonic for people with weakness, neuropathy, or metabolic stress.",
        },
      ],
      usage: [
        "Take 1 tablespoon (15 ml) once or twice daily, or as directed by your doctor.",
        "Can be taken with or without food.",
        "Shake well before each use.",
        "Store in a cool, dry place away from direct sunlight.",
      ],
    },
    category: "Neurology",
  },
  {
    id: 20,
    name: "Eye-Cord",
    type: "Vision Support Capsules",
    department: "Internal Medicine",
    brand: "Lacora",
    image: "/p20.png",
    shortDesc:
      "Formulated to support eye health and maintain normal vision with essential nutrients and antioxidants.",
    fullDesc: {
      about: [
        {
          icon: <FaEye className="text-[#013E5D]" size={24} />,
          title: "Eye Health Support",
          text: "Promotes overall eye wellness and protects against age-related vision decline.",
        },
        {
          icon: <MdVisibility className="text-[#013E5D]" size={24} />,
          title: "Vision Maintenance",
          text: "Supports clear and sharp vision with essential vitamins and minerals.",
        },
        {
          icon: <FaRegCheckCircle className="text-[#013E5D]" size={24} />,
          title: "Trusted Formula",
          text: "Clinically balanced ingredients with proven benefits for ocular health.",
        },
      ],
      usage: [
        "Take 1 capsule daily with a meal, or as directed by your doctor.",
        "Do not exceed the recommended dose.",
        "Store in a dry place below 25°C.",
        "Keep out of reach of children.",
      ],
    },
    category: "Ophthalmology",
  },
  {
    id: 21,
    name: "Appiviton Syrup",
    type: "Multivitamin and Appetite Syrup",
    department: "Internal Medicine",
    brand: "Lacora",
    image: "/p21.png",
    shortDesc:
      "Tasty syrup combining essential multivitamins with appetite stimulants for growing children.",
    fullDesc: {
      about: [
        {
          icon: <FaChild className="text-[#013E5D]" size={24} />,
          title: "Child Growth Support",
          text: "Formulated to assist in healthy physical development during early stages.",
        },
        {
          icon: <FaUtensils className="text-[#013E5D]" size={24} />,
          title: "Appetite Booster",
          text: "Helps stimulate appetite in children with poor eating habits.",
        },
        {
          icon: <GiHealthCapsule className="text-[#013E5D]" size={24} />,
          title: "Multivitamin Blend",
          text: "Contains essential vitamins to fill daily nutritional gaps.",
        },
      ],
      usage: [
        "1 teaspoon twice daily, or as prescribed by a pediatrician.",
        "Shake well before use.",
        "Store in a cool, dry place away from direct sunlight.",
        "Keep out of reach of children.",
      ],
    },
    category: "Pediatrics",
  },
  {
    id: 22,
    name: "Neuromega Syrup",
    type: "Omega Syrup for Kids",
    department: "Neurology",
    brand: "Lacora",
    image: "/p22.png",
    shortDesc:
      "Omega-rich syrup designed to support children's brain development, memory, and nervous system health.",
    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Brain Development",
          text: "Supports mental focus, learning abilities, and early cognitive function.",
        },
        {
          icon: <GiDroplets className="text-[#013E5D]" size={24} />,
          title: "Omega Fatty Acids",
          text: "Enriched with essential Omega-3s for nervous system nourishment.",
        },
        {
          icon: <FaChild className="text-[#013E5D]" size={24} />,
          title: "Safe for Children",
          text: "Gentle formulation, ideal for daily use in developing children.",
        },
      ],
      usage: [
        "1 teaspoon daily, or as recommended by a healthcare professional.",
        "Shake well before use.",
        "Store in a cool, dry place.",
        "Best taken with food to enhance absorption.",
      ],
    },
    category: "Pediatrics",
  },
  {
    id: 23,
    name: "Osteocora Syrup",
    type: "Bone Health Syrup for Kids",
    department: "Orthopedic",
    brand: "Lacora",
    image: "/p23.png",
    shortDesc:
      "Calcium-rich syrup developed to support healthy bones and teeth in growing children.",
    fullDesc: {
      about: [
        {
          icon: <GiBoneKnife className="text-[#013E5D]" size={24} />,
          title: "Supports Bone Strength",
          text: "Helps in the formation and maintenance of strong bones and teeth.",
        },
        {
          icon: <FaChild className="text-[#013E5D]" size={24} />,
          title: "Ideal for Growing Kids",
          text: "Ensures optimal bone growth during critical development stages.",
        },
        {
          icon: <GiBabyBottle className="text-[#013E5D]" size={24} />,
          title: "Tasty and Easy to Consume",
          text: "Delicious flavor for hassle-free daily intake by children.",
        },
      ],
      usage: [
        "1 teaspoon (5 ml) twice daily, or as advised by a pediatrician.",
        "Shake well before use.",
        "Store below 25°C in a dry place.",
        "Do not exceed recommended dose.",
      ],
    },
    category: "Pediatrics",
  },
  {
    id: 24,
    name: "Neurocephal Syrup",
    type: "Brain & Nerve Support Syrup for Kids",
    department: "Neurology",
    brand: "Lacora",
    image: "/p24.png",
    shortDesc:
      "Special formula to support children's nervous system, concentration, and mental performance.",
    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Cognitive Support",
          text: "Enhances memory, focus, and learning capabilities in children.",
        },
        {
          icon: <GiLightningArc className="text-[#013E5D]" size={24} />,
          title: "Nerve Function",
          text: "Promotes healthy nerve signals and brain energy metabolism.",
        },
        {
          icon: <FaChild className="text-[#013E5D]" size={24} />,
          title: "Child-Friendly",
          text: "Safe and effective formula suitable for growing children.",
        },
      ],
      usage: [
        "Take 1 teaspoon (5 ml) once or twice daily.",
        "Shake well before each use.",
        "Do not exceed the recommended dose.",
        "Keep in a cool, dry place below 25°C.",
      ],
    },
    category: "Pediatrics",
  },
  {
    id: 25,
    name: "Robinson Omega-3",
    department: "Internal Medicine",
    type: "EPA + DHA Capsules",
    brand: "Robinson",
    image: "/p25.png",
    shortDesc:
      "High-strength Omega-3 formula with EPA & DHA to support heart, brain, and vision.",
    fullDesc: {
      about: [
        {
          icon: <GiHeartPlus className="text-[#013E5D]" size={24} />,
          title: "Heart Health",
          text: "Helps maintain healthy cholesterol and blood pressure levels.",
        },
        {
          icon: <FaBrain className="text-[#013E5D]" size={24} />,
          title: "Brain Function",
          text: "Supports cognitive performance and memory function.",
        },
        {
          icon: <MdVisibility className="text-[#013E5D]" size={24} />,
          title: "Eye Health",
          text: "DHA contributes to maintaining normal vision.",
        },
        {
          icon: <GiFishEggs className="text-[#013E5D]" size={24} />,
          title: "High Purity",
          text: "Sourced from high-quality deep-sea fish oils.",
        },
      ],
      usage: [
        "Take 1–2 capsules daily with meals.",
        "Do not exceed recommended dose.",
        "Store below 25°C in a dry place.",
        "Consult a doctor if pregnant or on medication.",
      ],
    },
    category: "General Health",
  },
  {
    id: 26,
    name: "Bebelact Sachets",
    type: "Digestive & Immunity Support",
    department: "Internal Medicine",
    brand: "Robinson",
    image: "/p26.png",
    shortDesc:
      "Natural sachets to support digestion and immunity in infants and young children.",
    fullDesc: {
      about: [
        {
          icon: <FaBaby className="text-[#013E5D]" size={24} />,
          title: "Infant-Friendly",
          text: "Designed specifically for infants and toddlers for better gut balance.",
        },
        {
          icon: <FaLeaf className="text-[#013E5D]" size={24} />,
          title: "Natural Ingredients",
          text: "Formulated with natural prebiotics and digestive support elements.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#013E5D]" size={24} />
          ),
          title: "Immune Boost",
          text: "Helps strengthen the body’s natural defense system.",
        },
      ],
      usage: [
        "Empty one sachet into water or milk and mix well.",
        "Use once daily or as directed by a pediatrician.",
        "Store in a cool dry place, below 25°C.",
      ],
    },
    category: "Pediatrics",
  },
  {
    id: 27,
    name: "Renal Cleanse",
    type: "Kidney Detox Capsules",
    department: "Internal Medicine",
    brand: "NeekPeptides",
    image: "/p27.png",
    shortDesc:
      "Formulated to support kidney health, dissolve stones, and relieve urinary tract infections.",
    fullDesc: {
      about: [
        {
          icon: <GiKidneys className="text-[#013E5D]" size={24} />,
          title: "Kidney Detox",
          text: "Helps flush out toxins and reduce kidney stone formation.",
        },
        {
          icon: <FaTint className="text-[#013E5D]" size={24} />,
          title: "UTI Relief",
          text: "Soothes urinary tract irritation and supports bladder health.",
        },
        {
          icon: <MdLocalHospital className="text-[#013E5D]" size={24} />,
          title: "Clinically Supported",
          text: "Backed by ingredients traditionally used in renal health support.",
        },
      ],
      usage: [
        "Take 1–2 capsules daily with water after meals.",
        "Consult your doctor before use during pregnancy or while taking other medication.",
        "Store in a cool dry place, away from direct sunlight.",
      ],
    },
    category: "Urinary Health",
  },
  {
    id: 28,
    name: "Neurocit Bran",
    type: "Brain Health Supplement",
    department: "Neurology",
    brand: "Nodemtles",
    image: "/p28.png",
    shortDesc:
      "Enhances brain function, supports memory, and promotes cognitive clarity.",
    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#013E5D]" size={24} />,
          title: "Cognitive Function",
          text: "Supports focus, memory, and mental sharpness.",
        },
        {
          icon: <MdOutlinePsychology className="text-[#013E5D]" size={24} />,
          title: "Brain Support",
          text: "Formulated to boost brain health and neurological balance.",
        },
        {
          icon: <FaBolt className="text-[#013E5D]" size={24} />,
          title: "Mental Energy",
          text: "Helps fight mental fatigue and increase alertness.",
        },
      ],
      usage: [
        "Take 1–2 capsules daily with meals.",
        "Do not exceed the recommended dose.",
        "Store in a dry place at room temperature.",
      ],
    },
    category: "Cognitive Support",
  },
  {
    id: 29,
    name: "SPRMADOX",
    type: "Male Fertility Supplement",
    department: "Internal Medicine",
    brand: "Hotuding Bcemps",
    image: "/p29.png",
    shortDesc:
      "Formulated to support male fertility, motility, and reproductive health.",
    fullDesc: {
      about: [
        {
          icon: <GiLifeBar className="text-[#0099cc]" size={24} />,
          title: "Sperm Quality",
          text: "Supports healthy sperm motility and count.",
        },
        {
          icon: <FaHeartbeat className="text-[#0099cc]" size={24} />,
          title: "Reproductive Function",
          text: "Enhances male reproductive system performance.",
        },
        {
          icon: <GiDroplets className="text-[#0099cc]" size={24} />,
          title: "Antioxidant Support",
          text: "Protects sperm cells from oxidative stress.",
        },
      ],
      usage: [
        "Take 1–2 capsules daily with a meal.",
        "Consult a physician before use if under medication.",
        "Store in a cool, dry place away from sunlight.",
      ],
    },
    category: "Men's Fertility",
  },
  {
    id: 30,
    name: "Renal Cleanse",
    type: "Kidney Support Supplement",
    department: "Internal Medicine",
    brand: "CITAVIT",
    image: "/p30.png",
    shortDesc:
      "Herbal supplement formulated to support kidney health and urinary tract function.",
    fullDesc: {
      about: [
        {
          icon: <GiKidneys className="text-[#0099cc]" size={24} />,
          title: "Kidney Support",
          text: "Promotes healthy kidney filtration and detoxification.",
        },
        {
          icon: <MdOutlineWaterDrop className="text-[#0099cc]" size={24} />,
          title: "UT Health",
          text: "Supports urinary tract cleansing and function.",
        },
        {
          icon: <GiMedicines className="text-[#0099cc]" size={24} />,
          title: "Natural Formula",
          text: "Contains natural herbs traditionally used for renal care.",
        },
      ],
      usage: [
        "Take 2 capsules daily with water.",
        "Do not exceed the recommended dose.",
        "Keep out of reach of children.",
      ],
    },
    category: "Kidney Health",
  },
  {
    id: 31,
    name: "Cotacrann",
    type: "Urinary Tract Support",
    department: "Internal Medicine",
    brand: "CITAVIT",
    image: "/p31.png",
    shortDesc:
      "Natural cranberry-based formula to help support urinary tract health and prevent infections.",
    fullDesc: {
      about: [
        {
          icon: <GiFruitBowl className="text-[#cc0033]" size={24} />,
          title: "Cranberry Power",
          text: "Rich in cranberry extract known for promoting urinary tract health.",
        },
        {
          icon: <FaShieldAlt className="text-[#cc0033]" size={24} />,
          title: "Immune Protection",
          text: "Helps prevent recurrent UTIs with antioxidant defense.",
        },
        {
          icon: <FaTint className="text-[#cc0033]" size={24} />,
          title: "Urine Flow",
          text: "Supports normal urine flow and bladder comfort.",
        },
      ],
      usage: [
        "Take 1 capsule twice daily after meals.",
        "Stay hydrated while using the product.",
        "Store in a dry place at room temperature.",
      ],
    },
    category: "Urinary Health",
  },
  {
    id: 32,
    name: "CitaFlex Extra",
    type: "Joint, Nerve & Bone Support",
    department: "Orthopedic",
    brand: "Nisturous",
    image: "/p32.png",
    shortDesc:
      "Triple-action formula for joint flexibility, nerve support, and strong bones.",
    fullDesc: {
      about: [
        {
          icon: <GiJoint className="text-[#336699]" size={24} />,
          title: "Joint Health",
          text: "Supports joint flexibility and mobility.",
        },
        {
          icon: <GiLever className="text-[#336699]" size={24} />,
          title: "Nerve Support",
          text: "Promotes healthy nerve function and reduces discomfort.",
        },
        {
          icon: <FaBone className="text-[#336699]" size={24} />,
          title: "Bone Strength",
          text: "Enhances bone density and structure.",
        },
      ],
      usage: [
        "Take 2 capsules daily with meals.",
        "Ideal for those with joint stiffness or nerve issues.",
        "Store tightly closed in a cool, dry place.",
      ],
    },
    category: "Joint & Bone Health",
  },
  {
    id: 33,
    name: "XY SELECTION",
    type: "Male Fertility & Reproductive Health",
    department: "Internal Medicine",
    brand: "Hormenext",
    image: "/p33.png",
    shortDesc:
      "Advanced male fertility support formula for reproductive performance and sperm quality.",
    fullDesc: {
      about: [
        {
          icon: <GiMale className="text-[#0066cc]" size={24} />,
          title: "Male Fertility",
          text: "Supports hormone levels and male reproductive health.",
        },
        {
          icon: <GiSpermWhale className="text-[#0066cc]" size={24} />,
          title: "Sperm Motility",
          text: "Improves sperm motility and function for fertility enhancement.",
        },
        {
          icon: <FaHeartbeat className="text-[#0066cc]" size={24} />,
          title: "Vitality Support",
          text: "Boosts male vitality and physical performance.",
        },
      ],
      usage: [
        "Take 2 capsules daily after meals.",
        "Recommended to use consistently for at least 3 months.",
        "Consult your healthcare provider before use.",
      ],
    },
    category: "Men's Fertility",
  },
  {
    id: 34,
    name: "Polycystic Off",
    type: "Women's Health Supplement",
    department: "Gynecology",
    brand: "CITAVIT",
    image: "/p34.png",
    shortDesc:
      "Formulated to support hormone balance and ovarian function in women with PCOS.",
    fullDesc: {
      about: [
        {
          icon: <GiFemale className="text-[#cc6699]" size={24} />,
          title: "Hormonal Balance",
          text: "Helps regulate menstrual cycles and hormone levels.",
        },
        {
          icon: <FaBalanceScale className="text-[#cc6699]" size={24} />,
          title: "Insulin Sensitivity",
          text: "Supports better metabolic function and insulin response.",
        },
        {
          icon: <GiHeartBottle className="text-[#cc6699]" size={24} />,
          title: "Ovarian Health",
          text: "Promotes normal ovarian function and reduces PCOS symptoms.",
        },
      ],
      usage: [
        "Take 2 capsules daily after meals.",
        "For best results, use consistently for 3–6 months.",
        "Consult a healthcare provider before use, especially if on medication.",
      ],
    },
    category: "Women's Health",
  },
  {
    id: 35,
    name: "CONDOFLEX",
    type: "Joint Health Supplement",
    department: "Orthopedic",
    brand: "RISA CARE",
    image: "/p35.png",
    shortDesc:
      "Powder supplement designed to support joint flexibility, cartilage, and mobility.",
    fullDesc: {
      about: [
        {
          icon: <GiJoint className="text-[#a94442]" size={24} />,
          title: "Joint Support",
          text: "Contains 1.5g glucosamine to help maintain joint structure and reduce discomfort.",
        },
        {
          icon: <GiKneeCap className="text-[#a94442]" size={24} />,
          title: "Cartilage Health",
          text: "Supports regeneration of cartilage and connective tissue.",
        },
        {
          icon: (
            <MdOutlineDirectionsWalk className="text-[#a94442]" size={24} />
          ),
          title: "Mobility & Flexibility",
          text: "Improves joint movement and daily physical performance.",
        },
      ],
      usage: [
        "Dissolve 1 sachet in a glass of water and take once daily.",
        "Recommended for continuous use for at least 2–3 months.",
        "Store in a dry place below 25°C.",
      ],
    },
    category: "Bone & Joint Health",
  },
  {
    id: 36,
    name: "Cololax",
    type: "Digestive Health Supplement",
    department: "Internal Medicine",
    brand: "Lacora",
    image: "/p36.png",
    shortDesc:
      "Effective relief from constipation and support for regular bowel movement.",
    fullDesc: {
      about: [
        {
          icon: <GiStomach className="text-[#0077b6]" size={24} />,
          title: "Constipation Relief",
          text: "Promotes smooth bowel movement and reduces discomfort.",
        },
        {
          icon: (
            <MdOutlineTipsAndUpdates className="text-[#0077b6]" size={24} />
          ),
          title: "Gentle Formula",
          text: "Safe and effective for daily use, including during pregnancy.",
        },
        {
          icon: <FaRegSmile className="text-[#0077b6]" size={24} />,
          title: "Digestive Comfort",
          text: "Improves overall digestive health and well-being.",
        },
      ],
      usage: [
        "Take 1 capsule daily after a meal, or as directed by a physician.",
        "Do not exceed the recommended dose.",
        "Store in a cool, dry place away from direct sunlight.",
      ],
    },
    category: "Digestive Health",
  },
  {
    id: 37,
    name: "Coloreast Advance 30B",
    type: "Probiotic Supplement",
    department: "Internal Medicine",
    brand: "Lacora",
    image: "/p37.png",
    shortDesc:
      "30 billion active cultures to support gut flora balance and improve digestive health.",
    fullDesc: {
      about: [
        {
          icon: <GiIncense className="text-[#f4a300]" size={24} />,
          title: "Gut Flora Support",
          text: "Promotes the growth of beneficial bacteria in the intestines.",
        },
        {
          icon: <MdHealthAndSafety className="text-[#f4a300]" size={24} />,
          title: "Digestive Defense",
          text: "Helps maintain a healthy digestive system and immune function.",
        },
        {
          icon: <BiHappyHeartEyes className="text-[#f4a300]" size={24} />,
          title: "Overall Well-being",
          text: "Supports better digestion, less bloating, and improved mood.",
        },
      ],
      usage: [
        "Take 1 capsule daily before or after meals.",
        "Ideal for daily probiotic support.",
        "Store in a dry place below 25°C.",
      ],
    },
    category: "Digestive Health",
  },
  {
    id: 38,
    name: "Cololax",
    type: "Natural Laxative Supplement",
    department: "Internal Medicine",
    brand: "Lacora",
    image: "/p38.png",
    shortDesc:
      "Natural plant-based formula designed to relieve occasional constipation gently and effectively.",
    fullDesc: {
      about: [
        {
          icon: <GiHerbsBundle className="text-[#68b984]" size={24} />,
          title: "Natural Ingredients",
          text: "Made with gentle herbal extracts for effective bowel movement support.",
        },
        {
          icon: <GiIncense className="text-[#68b984]" size={24} />,
          title: "Digestive Comfort",
          text: "Supports smooth digestion and promotes gut regularity.",
        },
        {
          icon: <MdOutlineAutoAwesome className="text-[#68b984]" size={24} />,
          title: "Gentle Action",
          text: "Acts without harsh side effects, ideal for occasional use.",
        },
      ],
      usage: [
        "Take 1–2 capsules at bedtime with water.",
        "Not for prolonged use without medical advice.",
        "Store in a cool, dry place away from children.",
      ],
    },
    category: "Digestive Health",
  },
  {
    id: 39,
    name: "IROBOOST",
    type: "Iron Liquid Supplement",
    department: "Internal Medicine",
    brand: "IROBOOST",
    image: "/p39.png",
    shortDesc:
      "High-potency iron liquid supplement to support healthy blood levels and fight fatigue.",
    fullDesc: {
      about: [
        {
          icon: <MdBloodtype className="text-[#e53935]" size={24} />,
          title: "Iron Support",
          text: "Provides 40 mg of elemental iron to combat deficiency and anemia.",
        },
        {
          icon: <GiDrop className="text-[#e53935]" size={24} />,
          title: "Fast Absorption",
          text: "Liquid form ensures quicker absorption and gentle on the stomach.",
        },
        {
          icon: <GiEnergyArrow className="text-[#e53935]" size={24} />,
          title: "Energy & Vitality",
          text: "Helps reduce tiredness and supports red blood cell production.",
        },
      ],
      usage: [
        "Take the recommended dose daily or as directed by a physician.",
        "Shake well before use.",
        "Store in a cool, dry place. Keep out of reach of children.",
      ],
    },
    category: "Iron & Blood Support",
  },
  {
    id: 40,
    name: "Neurocit Relief",
    department: "Neurology",
    type: "Neuropathy Support Supplement",
    brand: "Neurocit",
    image: "/p40.png",
    shortDesc:
      "Formulated to help relieve neuropathic pain and support nerve function.",
    fullDesc: {
      about: [
        {
          icon: <GiLever className="text-[#3b82f6]" size={24} />,
          title: "Nerve Repair",
          text: "Supports regeneration and repair of damaged nerves.",
        },
        {
          icon: <MdOutlinePsychology className="text-[#3b82f6]" size={24} />,
          title: "Neuropathic Pain Relief",
          text: "Helps reduce burning, tingling, and numbness symptoms.",
        },
        {
          icon: <GiBrain className="text-[#3b82f6]" size={24} />,
          title: "Brain & Nerve Function",
          text: "Improves nerve signal transmission and overall cognitive support.",
        },
      ],
      usage: [
        "Take 1 capsule twice daily after meals.",
        "Use regularly for best results.",
        "Consult your doctor if symptoms persist.",
      ],
    },
    category: "Nerve Health",
  },
  {
    id: 41,
    name: "Robinson Omega-3",
    type: "Fish Oil Supplement",
    department: "Internal Medicine",
    brand: "Robinson",
    image: "/p41.png",
    shortDesc: "EPA + DHA for heart, brain, and eye health.",
    fullDesc: {
      about: [
        {
          icon: <GiHeartPlus className="text-[#2563eb]" size={24} />,
          title: "Heart Health",
          text: "Supports cardiovascular function and helps maintain healthy cholesterol levels.",
        },
        {
          icon: <GiBrain className="text-[#2563eb]" size={24} />,
          title: "Brain Support",
          text: "Improves cognitive function and mental clarity.",
        },
        {
          icon: <GiFishEggs className="text-[#2563eb]" size={24} />,
          title: "Rich in Omega-3",
          text: "Contains EPA and DHA extracted from high-quality fish oil.",
        },
      ],
      usage: [
        "Take 1 softgel daily with food.",
        "Do not exceed recommended dosage.",
        "Store in a cool, dry place away from sunlight.",
      ],
    },
    category: "Omega-3 / Heart & Brain",
  },
  {
    id: 42,
    name: "Neurocephal Syrup",
    type: "Brain Support Syrup",
    department: "Neurology",
    brand: "Lacora",
    image: "/p42.png",
    shortDesc:
      "Supports mental clarity, reduces nervous tension, and promotes relaxation.",
    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#22c55e]" size={24} />,
          title: "Cognitive Function",
          text: "Enhances brain performance and mental focus.",
        },
        {
          icon: <GiNightSleep className="text-[#22c55e]" size={24} />,
          title: "Sleep & Relaxation",
          text: "Helps promote better sleep and calm the nerves.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#22c55e]" size={24} />,
          title: "Stress Relief",
          text: "Supports the reduction of nervous tension and fatigue.",
        },
      ],
      usage: [
        "Take the recommended dose as directed by a healthcare professional.",
        "Shake well before use.",
        "Store in a cool, dry place.",
      ],
    },
    category: "Neurological Support / Syrup",
  },
  {
    id: 43,
    name: "Caldisoft",
    type: "Calcium + Vitamin D3 Supplement",
    department: "Orthopedic",
    brand: "Robinson",
    image: "/p43.png",
    shortDesc:
      "Supports bone strength and joint flexibility with essential calcium and vitamin D3.",
    fullDesc: {
      about: [
        {
          icon: <GiBoneKnife className="text-[#f97316]" size={24} />,
          title: "Bone Health",
          text: "Helps maintain strong and healthy bones.",
        },
        {
          icon: <GiWalk className="text-[#f97316]" size={24} />,
          title: "Mobility Support",
          text: "Supports joint flexibility and daily movement.",
        },
        {
          icon: <GiHealthIncrease className="text-[#f97316]" size={24} />,
          title: "Calcium Absorption",
          text: "Enhances calcium absorption with Vitamin D3 for better bone density.",
        },
      ],
      usage: [
        "Take 1 softgel daily with a meal.",
        "Do not exceed the recommended dose.",
        "Store in a dry place below 25°C.",
      ],
    },
    category: "Bone & Joint Health",
  },
  {
    id: 44,
    name: "PROCRANN",
    type: "Cranberry Extract Powder",
    department: "Gynecology",
    brand: "MEGA",
    image: "/p44.png",
    shortDesc:
      "Probiotic and cranberry powder to support urinary tract health and immunity.",
    fullDesc: {
      about: [
        {
          icon: <GiWaterDrop className="text-[#dc2626]" size={24} />,
          title: "Urinary Tract Support",
          text: "Helps reduce the risk of recurrent urinary tract infections (UTIs).",
        },
        {
          icon: <GiFruitBowl className="text-[#dc2626]" size={24} />,
          title: "Cranberry Extract",
          text: "Contains 400mg of natural cranberry fruit powder.",
        },
        {
          icon: <GiHealthCapsule className="text-[#dc2626]" size={24} />,
          title: "Probiotic Blend",
          text: "Enhances digestive and immune system health.",
        },
      ],
      usage: [
        "Take 1 sachet daily or as recommended by your doctor.",
        "Dissolve in a glass of water and consume immediately.",
        "Store in a cool, dry place.",
      ],
    },
    category: "Women's Health",
  },
  {
    id: 45,
    name: "SEMAZON 1000mg",
    type: "Citicoline Oral Solution",
    department: "Internal Medicine",
    brand: "Nerweg",
    image: "/p45.png",
    shortDesc:
      "Supports brain function and improves cognitive performance, especially in neurological conditions.",
    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#3b82f6]" size={24} />,
          title: "Cognitive Function",
          text: "Improves memory, focus, and overall brain performance.",
        },
        {
          icon: <GiLightningTrio className="text-[#3b82f6]" size={24} />,
          title: "Neurological Recovery",
          text: "Aids in recovery from stroke and brain injuries.",
        },
        {
          icon: <GiSittingDog className="text-[#3b82f6]" size={24} />,
          title: "Mental Clarity",
          text: "Promotes mental alertness and clarity in elderly patients.",
        },
      ],
      usage: [
        "Take 1 sachet per day orally, or as prescribed by a doctor.",
        "Shake well before use.",
        "Store below 25°C and keep away from direct sunlight.",
      ],
    },
    category: "Brain & Memory",
  },
  {
    id: 46,
    name: "MULTI-NEX",
    type: "Multivitamin & Mineral Formula",
    department: "Internal Medicine",
    brand: "Nexel",
    image: "/p46.png",
    shortDesc:
      "Comprehensive multivitamin supplement to support overall wellness and daily energy needs.",
    fullDesc: {
      about: [
        {
          icon: <GiVomiting className="text-[#9333ea]" size={24} />,
          title: "Essential Nutrients",
          text: "Packed with vitamins A, B-complex, C, D, E, and vital minerals for optimal health.",
        },
        {
          icon: <GiHeartPlus className="text-[#9333ea]" size={24} />,
          title: "Immune & Heart Support",
          text: "Boosts immunity and maintains cardiovascular health.",
        },
        {
          icon: <GiMuscleUp className="text-[#9333ea]" size={24} />,
          title: "Energy & Vitality",
          text: "Helps fight fatigue and promotes daily energy and muscle strength.",
        },
      ],
      usage: [
        "Take 1 tablet daily with food.",
        "Do not exceed the recommended dose.",
        "Store in a dry place at room temperature.",
      ],
    },
    category: "Multivitamins",
  },
  {
    id: 47,
    name: "CENTRU-CURE",
    type: "Multi Vitamins A–Z",
    department: "Internal Medicine",
    brand: "Medcure",
    image: "/p47.png",
    shortDesc:
      "Provides essential micronutrients to support immune system, energy metabolism, and overall health.",
    fullDesc: {
      about: [
        {
          icon: <GiMicroscope className="text-[#f59e0b]" size={24} />,
          title: "Immune Support",
          text: "Helps strengthen the body’s natural defenses with vital vitamins and minerals.",
        },
        {
          icon: <GiBodyBalance className="text-[#f59e0b]" size={24} />,
          title: "Energy & Metabolism",
          text: "Supports healthy energy levels and efficient metabolism.",
        },
        {
          icon: <GiHealthNormal className="text-[#f59e0b]" size={24} />,
          title: "Whole Body Health",
          text: "Promotes overall well-being and proper physiological function.",
        },
      ],
      usage: [
        "Take 1 tablet daily after a meal.",
        "Suitable for adults only.",
        "Keep in a cool, dry place out of reach of children.",
      ],
    },
    category: "Multivitamins",
  },
  {
    id: 48,
    name: "Citomax",
    type: "Cognitive Supplement",
    department: "Internal Medicine",
    brand: "Lacora",
    image: "/p48.png",
    shortDesc:
      "Fast-acting oral Citicoline formula designed to support brain function and mental clarity.",
    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#8b5cf6]" size={24} />,
          title: "Cognitive Support",
          text: "Enhances brain performance and focus with high-dose Citicoline.",
        },
        {
          icon: <FaBolt className="text-[#8b5cf6]" size={24} />,
          title: "Fast Absorption",
          text: "Quick oral absorption for faster results and improved bioavailability.",
        },
        {
          icon: <FaRegSmile className="text-[#8b5cf6]" size={24} />,
          title: "Mental Clarity",
          text: "Helps maintain mental alertness and supports overall brain health.",
        },
      ],
      usage: [
        "Take 1 sachet daily, directly into the mouth or as directed by a healthcare professional.",
        "Do not exceed the recommended dose.",
        "Store in a cool, dry place away from sunlight.",
      ],
    },
    category: "Cognitive Support",
  },
  {
    id: 49,
    name: "UTInex",
    type: "Urinary Tract Support",
    department: "Internal Medicine",
    brand: "Nexel Pharma",
    image: "/p49.png",
    shortDesc:
      "Cranberry-based formula designed to help support urinary tract health and reduce UTI recurrence.",
    fullDesc: {
      about: [
        {
          icon: <GiDrop className="text-[#e11d48]" size={24} />,
          title: "Urinary Tract Health",
          text: "Supports bladder and urinary tract function with cranberry extract.",
        },
        {
          icon: <FaLeaf className="text-[#e11d48]" size={24} />,
          title: "Natural Cleanse",
          text: "Formulated with natural plant extracts to help cleanse the system.",
        },
        {
          icon: <FaShieldAlt className="text-[#e11d48]" size={24} />,
          title: "Prevention Support",
          text: "Helps reduce the risk of recurrent UTIs when used regularly.",
        },
      ],
      usage: [
        "Take 2 sachets daily or as directed by a healthcare professional.",
        "Dissolve sachet contents in water and drink immediately.",
        "Store in a dry place at room temperature.",
      ],
    },
    category: "Women's Health",
  },
  {
    id: 50,
    name: "Ortho-Nex",
    type: "Pain Relief Gel",
    department: "Orthopedic",
    brand: "Nexel",
    image: "/p50.png",
    shortDesc:
      "Topical gel for long-lasting relief from joint and muscle pain.",
    fullDesc: {
      about: [
        {
          icon: <GiKneeCap className="text-[#eab308]" size={24} />,
          title: "Joint Relief",
          text: "Targets joint inflammation and stiffness effectively.",
        },
        {
          icon: <GiThermometerCold className="text-[#eab308]" size={24} />,
          title: "Cooling Effect",
          text: "Provides a fast cooling sensation that soothes pain instantly.",
        },
        {
          icon: <GiPin className="text-[#eab308]" size={24} />,
          title: "Pain Management",
          text: "Supports long-term pain management with regular application.",
        },
      ],
      usage: [
        "Apply a thin layer on the affected area 2–3 times daily.",
        "Massage gently until fully absorbed.",
        "Avoid contact with eyes or broken skin.",
      ],
    },
    category: "Joint & Muscle Care",
  },
  {
    id: 51,
    name: "Spermadox",
    type: "Dietary Supplement",
    isNew: false,
    department: "Internal Medicine",
    brand: "Spermadox",
    image: "/p51.png",
    shortDesc:
      "Supports male fertility and sperm health by enhancing sperm count, motility, and overall reproductive vitality. Helps maintain hormonal balance and boosts energy levels for improved male wellness.",

    fullDesc: {
      about: [
        {
          icon: <GiKneeCap className="text-[#eab308]" size={24} />,
          title: "Fertility Support",
          text: "Enhances sperm count and motility for improved fertility.",
        },
        {
          icon: <GiThermometerCold className="text-[#eab308]" size={24} />,
          title: "Hormonal Balance",
          text: "Helps maintain healthy testosterone levels naturally.",
        },
        {
          icon: <GiPin className="text-[#eab308]" size={24} />,
          title: "Overall Reproductive Health",
          text: "Promotes overall male reproductive wellness and vitality.",
        },
      ],
      usage: [
        "Take 2 capsules daily with meals.",
        "Maintain a balanced diet and healthy lifestyle.",
        "Consult your doctor before use if you have any medical conditions.",
      ],
    },
    category: "Men's Supplements",
  },
  {
    id: 52,
    name: "PolyCystic OFF",
    type: "Dietary Supplement",
    department: "Gynecology",
    brand: "PolyCystic OFF",
    isNew: false,
    image: "/p52.png",
    shortDesc:
      "Supports hormonal balance and ovarian health by promoting regular menstrual cycles, reducing symptoms of hormonal imbalance, and enhancing overall reproductive wellness.",

    fullDesc: {
      about: [
        {
          icon: <GiKneeCap className="text-[#eab308]" size={24} />,
          title: "Hormonal Balance",
          text: "Helps regulate hormones for better ovarian function.",
        },
        {
          icon: <GiThermometerCold className="text-[#eab308]" size={24} />,
          title: "Ovarian Health",
          text: "Supports healthy ovary function and follicle development.",
        },
        {
          icon: <GiPin className="text-[#eab308]" size={24} />,
          title: "Overall Wellness",
          text: "Promotes general reproductive system health and vitality.",
        },
      ],
      usage: [
        "Take 1 capsule daily with meals.",
        "Maintain a balanced diet and healthy lifestyle.",
        "Consult your healthcare provider before use.",
      ],
    },
    category: "Women's Supplements",
  },
  {
    id: 53,
    name: "EYECORD",
    type: "Dietary Supplement",
    department: "Internal Medicine",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p53.png",
    shortDesc:
      "Supports eye health by protecting the retina, enhancing vision clarity, and shielding the eyes from blue light exposure with natural antioxidant power.",

    fullDesc: {
      about: [
        {
          icon: <GiHealingShield className="text-[#eab308]" size={24} />,
          title: "Blue Light Protection",
          text: "Helps shield the eyes from harmful blue light emitted by screens.",
        },
        {
          icon: <GiEyeShield className="text-[#eab308]" size={24} />,
          title: "Retinal Support",
          text: "Strengthens retinal health and supports long-term vision performance.",
        },
        {
          icon: <GiHerbsBundle className="text-[#eab308]" size={24} />,
          title: "Antioxidant Formula",
          text: "Provides natural antioxidants to reduce oxidative stress on the eyes.",
        },
      ],
      usage: [
        "Take 1 capsule daily after meals.",
        "Avoid prolonged screen exposure when possible.",
        "Consult a healthcare professional if you have any eye conditions.",
      ],
    },

    category: "Vision Supplements",
  },
  {
    id: 54,
    name: "Hicora",
    type: "Dietary Supplement",
    department: "Internal Medicine",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p54.png",
    shortDesc:
      "Supports colon health by relieving bloating, constipation, irritable bowel symptoms, and promoting healthier digestion.",

    fullDesc: {
      about: [
        {
          icon: <GiStomach className="text-[#eab308]" size={24} />,
          title: "Digestive Comfort",
          text: "Helps relieve bloating, colic, and discomfort associated with digestive imbalance.",
        },
        {
          icon: <GiDrop className="text-[#eab308]" size={24} />,
          title: "Constipation Relief",
          text: "Supports smoother bowel movements and helps with dry or hard stools.",
        },
        {
          icon: <GiHealing className="text-[#eab308]" size={24} />,
          title: "IBS Support",
          text: "Assists in reducing symptoms of irritable bowel syndrome and loose bowels.",
        },
      ],
      usage: [
        "Take 1 capsule twice daily after meals.",
        "Stay hydrated throughout the day.",
        "Consult a healthcare provider if pregnant or experiencing chronic digestive issues.",
      ],
    },

    category: "Digestive Health",
  },
  {
    id: 55,
    name: "Becormix Renaseptic",
    type: "Dietary Supplement",
    department: "Internal Medicine",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p55.png",
    shortDesc:
      "Supports kidney function and urinary tract health with a natural herbal formula designed to relieve inflammation and improve urine flow.",

    fullDesc: {
      about: [
        {
          icon: <GiKidneys className="text-[#F97316]" size={24} />,
          title: "Kidney Support",
          text: "Helps maintain healthy kidney function and supports toxin elimination.",
        },
        {
          icon: <GiDroplets className="text-[#F97316]" size={24} />,
          title: "Urinary Tract Relief",
          text: "Aids in reducing discomfort associated with urinary tract irritation.",
        },
        {
          icon: <GiHealingShield className="text-[#F97316]" size={24} />,
          title: "Herbal Protection",
          text: "Herbal blend formulated to soothe inflammation and promote urinary wellness.",
        },
      ],
      usage: [
        "Dissolve 1 sachet in a glass of water and take once or twice daily.",
        "Increase fluid intake throughout the day.",
        "Consult a healthcare provider if symptoms persist.",
      ],
    },

    category: "Kidney & Urinary Health",
  },
  {
    id: 56,
    name: "Vitaflex",
    type: "Dietary Supplement",
    department: "Orthopedic",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p56.png",
    shortDesc:
      "Supports joint flexibility, cartilage strength, and overall mobility with glucosamine, chondroitin, collagen, and Vitamin C.",

    fullDesc: {
      about: [
        {
          icon: <GiKneeCap className="text-[#5A2D82]" size={24} />,
          title: "Joint Flexibility",
          text: "Enhances joint mobility and reduces stiffness for smoother movement.",
        },
        {
          icon: <GiJoint className="text-[#5A2D82]" size={24} />,
          title: "Cartilage Support",
          text: "Provides nutrients essential for maintaining strong, healthy cartilage.",
        },
        {
          icon: <GiBoneKnife className="text-[#5A2D82]" size={24} />,
          title: "Collagen Boost",
          text: "Improves collagen formation to support connective tissues and joint resilience.",
        },
      ],
      usage: [
        "Take 1 capsule twice daily.",
        "Use consistently for best results.",
        "Consult your doctor if you have joint disorders or chronic pain.",
      ],
    },

    category: "Joint & Bone Health",
  },
  {
    id: 57,
    name: "Becora-plus",
    type: "Dietary Supplement",
    department: "Neurology",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p57.png",
    shortDesc:
      "Vitamin B6 and B12 formula designed to support nerve repair, enhance energy levels, and reduce nerve-related discomfort.",

    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#4B2E83]" size={24} />,
          title: "Nerve Repair Support",
          text: "Helps nourish and repair peripheral nerves to improve nerve function.",
        },
        {
          icon: <GiEnergyArrow className="text-[#4B2E83]" size={24} />,
          title: "Energy & Vitality",
          text: "Boosts overall body energy and reduces fatigue caused by nerve weakness.",
        },
        {
          icon: <GiHealing className="text-[#4B2E83]" size={24} />,
          title: "Facial Palsy Support",
          text: "May aid in recovery from nerve-related facial weakness and discomfort.",
        },
      ],
      usage: [
        "Take 1 capsule once or twice daily after meals.",
        "Maintain a balanced diet to support nerve health.",
        "Consult a specialist if symptoms persist or worsen.",
      ],
    },

    category: "Nerve Health",
  },
  {
    id: 58,
    name: "Becormix-Boost",
    type: "Dietary Supplement",
    department: "Neurology",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p58.png",
    shortDesc:
      "Advanced B-vitamin formula supporting nerve repair, boosting energy levels, and aiding recovery from nerve-related facial weakness.",

    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#4A2FA2]" size={24} />,
          title: "Nerve Repair Support",
          text: "Helps nourish and repair damaged nerves, enhancing overall nerve function.",
        },
        {
          icon: <GiEnergyArrow className="text-[#4A2FA2]" size={24} />,
          title: "Boosts Body Energy",
          text: "Improves vitality and reduces fatigue caused by nerve weakness.",
        },
        {
          icon: <GiHealing className="text-[#4A2FA2]" size={24} />,
          title: "Facial Palsy Aid",
          text: "Provides nutritional support that may assist in recovering from facial nerve issues.",
        },
      ],
      usage: [
        "Take 1 capsule once or twice daily after meals.",
        "Stay consistent for optimal nerve support.",
        "Consult a neurologist if symptoms persist.",
      ],
    },

    category: "Nerve Health",
  },
  {
    id: 59,
    name: "Nuclomax",
    type: "Dietary Supplement",
    department: "Neurology",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p59.png",
    shortDesc:
      "Advanced neuro-support formula designed to relieve neuropathic pain, support nerve repair, and improve nerve function in various neuropathy conditions.",

    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#4A2FA2]" size={24} />,
          title: "Neuropathy Support",
          text: "Helps improve nerve function and reduce symptoms of diabetic, metabolic, and alcoholic neuropathies.",
        },
        {
          icon: <GiLightningArc className="text-[#4A2FA2]" size={24} />,
          title: "Pain Relief",
          text: "Supports relief from nerve pain caused by herpes zoster and osteoarthritic neuralgia.",
        },
        {
          icon: <GiHealing className="text-[#4A2FA2]" size={24} />,
          title: "Nerve Repair",
          text: "Promotes nerve healing and restoration in chronic neuropathic conditions.",
        },
      ],
      usage: [
        "Take 1 capsule once or twice daily after meals.",
        "Use consistently to support nerve recovery.",
        "Consult a healthcare provider for chronic or severe neuropathic cases.",
      ],
    },

    category: "Nerve Health",
  },
  {
    id: 60,
    name: "Caldicin",
    type: "Dietary Supplement",
    department: "Orthopedic",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p60.png",
    shortDesc:
      "Calcium, Vitamin D3, and Vitamin K formula designed to support strong bones, enhance calcium absorption, and maintain teeth health.",

    fullDesc: {
      about: [
        {
          icon: <GiBoneKnife className="text-[#4A2FA2]" size={24} />,
          title: "Bone Strength",
          text: "Provides essential calcium to maintain bone density and overall skeletal strength.",
        },
        {
          icon: <GiJoint className="text-[#4A2FA2]" size={24} />,
          title: "Enhanced Absorption",
          text: "Vitamin D3 helps maximize calcium absorption into bones for better effectiveness.",
        },
        {
          icon: <GiHealing className="text-[#4A2FA2]" size={24} />,
          title: "Bone Repair Support",
          text: "Vitamin K contributes to proper calcium fixation and supports bone regeneration.",
        },
      ],
      usage: [
        "Take 1 capsule once or twice daily after meals.",
        "Ensure exposure to sunlight to boost Vitamin D activity.",
        "Consult your doctor if you have chronic bone or calcium disorders.",
      ],
    },

    category: "Bone & Joint Health",
  },
  {
    id: 61,
    name: "Neurodox",
    type: "Dietary Supplement",
    department: "Neurology",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p61.png",
    shortDesc:
      "Neuro-support formula designed to relieve neuropathic pain, enhance nerve regeneration, and boost brain performance.",

    fullDesc: {
      about: [
        {
          icon: <GiLightningArc className="text-[#25C3CF]" size={24} />,
          title: "Neuropathic Pain Relief",
          text: "Helps reduce nerve pain associated with peripheral neuropathy.",
        },
        {
          icon: <GiHealing className="text-[#25C3CF]" size={24} />,
          title: "Nerve Regeneration",
          text: "Supports the repair and regeneration of damaged nerves.",
        },
        {
          icon: <GiBrain className="text-[#25C3CF]" size={24} />,
          title: "Brain Booster",
          text: "Enhances focus, memory, and overall brain performance.",
        },
      ],
      usage: [
        "Take 1 capsule once or twice daily after meals.",
        "Stay consistent to improve nerve function.",
        "Consult a neurologist if symptoms persist.",
      ],
    },

    category: "Nerve Health",
  },
  {
    id: 62,
    name: "Becormix-Boost Syrup",
    type: "Dietary Supplement",
    department: "Neurology",
    brand: "Lacora Nutrition",
    isNew: true,
    image: "/p62.png",
    shortDesc:
      "Neuro-support syrup containing L-Carnitine, Taurine, Vitamin B6, and Methylcobalamin to enhance brain activity, memory, and mental performance.",

    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#4A2FA2]" size={24} />,
          title: "Brain Activity Support",
          text: "Helps enhance intellectual performance and improve overall cognitive function.",
        },
        {
          icon: <GiEnergyArrow className="text-[#4A2FA2]" size={24} />,
          title: "Mental Energy",
          text: "Supports mental alertness and boosts focus throughout the day.",
        },
        {
          icon: <GiHealing className="text-[#4A2FA2]" size={24} />,
          title: "Nerve Health",
          text: "Provides essential neuro vitamins that contribute to nerve repair and regeneration.",
        },
      ],
      usage: [
        "Adults: 5 ml once daily or as prescribed by a physician.",
        "Shake well before use.",
        "Use consistently for best cognitive support.",
      ],
    },

    category: "Nerve Health",
  },
];
