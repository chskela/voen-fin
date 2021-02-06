//     airСategory: 1,
//     classQualification: 0,
//     districtCoefficient: 1,
//     divisionsProtection: 0,
//     driversPositions: 0,
//     encryptionAuthorities: 0,
//     farNorth: 0,
//     flightPersonnel: 0,
//     legalEducation: 0,
//     marksOfExcellence: 0,
//     militaryAcademy: 0,
//     physicalFitness: 0,
//     position: 0,
//     positions1_4tr: 0,
//     premium: 0,
//     rank: 0,
//     riskToLife: 0,
//     seniorityBonus: 0,
//     specialConditionse: 0,
//     stateSecret: 0,

export const calculate = ({
  airСategory,
  classQualification,
  districtCoefficient, //Районный коэффициент
  divisionsProtection,
  driversPositions,
  encryptionAuthorities,
  farNorth,
  flightPersonnel,
  legalEducation,
  marksOfExcellence,
  militaryAcademy,
  physicalFitness,
  position,
  positions1_4tr,
  premium,
  rank,
  riskToLife,
  seniorityBonus,
  specialConditionse,
  stateSecret,
}) => {
  // клад по воинской должности
  const currentPosition = position * airСategory;
  // Оклад денежного содержания
  const ODS = currentPosition + rank;
  // Премия
  const ODSPremium = (ODS * premium) / 100;
  // Надбавка за выслугу лет
  const ODSseniorityBonus = (ODS * seniorityBonus) / 100;
  // Остальные надбавки
  const allAllowances =
    ((classQualification +
      divisionsProtection +
      driversPositions +
      encryptionAuthorities +
      flightPersonnel +
      legalEducation +
      marksOfExcellence +
      militaryAcademy +
      physicalFitness +
      riskToLife +
      specialConditionse +
      positions1_4tr +
      stateSecret) *
      currentPosition) /
    100;
  // ДД без северов
  const noNorth = ODS + ODSseniorityBonus + allAllowances;

  return (
    ((noNorth * farNorth) / 100) * districtCoefficient +
    noNorth * districtCoefficient +
    ODSPremium
  );
};
