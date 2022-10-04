import { IProperty } from "@interfaces/unit.interface";

export const properties: IProperty[] = [
  {
    name: 'Acceleration',
    image: 'acceleration.png',
    units: [
      {
        name: 'Meter/sq.sec (m/sec^2)',
        factor: 1,
      },
      {
        name: 'Foot/sq.sec (ft/sec^2)',
        factor: 0.3048,
      },
      {
        name: 'Gravity (g)',
        factor: 9.80665,
      },
      {
        name: 'Dalileo (gal)',
        factor: 0.01,
      },
      {
        name: 'Inch/sq.sec (in/sec^2)',
        factor: 2.54e-2,
      },
    ],
  },
  {
    name: 'Area',
    image: 'area.png',
    units: [
      {
        name: 'Square meter (m^2)',
        factor: 1,
      },
      {
        name: 'Acre (acre)',
        factor: 2
      },
      {
        name: 'Are',
        factor: 100,
      },
      {
        name: 'Barn (barn)',
        factor: 1e-28,
      },
      {
        name: 'Hectare',
        factor: 10000,
      },
      {
        name: 'Rood',
        factor: 1011.71413184285
      },
      {
        name: 'Square centimeter',
        factor: 0.0001
      },
      {
        name: 'Square kilometer',
        factor: 1000000
      },
      {
        name: 'Circular mil',
        factor: 5.067075e-10,
      },
      {
        name: 'Square foot (ft^2)',
        factor: 9.290304e-2,
      },
      {
        name: 'Square inch (in^2)',
        factor: 6.4516e-4,
      },
      {
        name: 'Square mile (mi^2)',
        factor: 2589988
      },
      {
        name: 'Square yard (yd^2)',
        factor: 0.8361274
      }
    ]
  },
  {
    name: 'Torque',
    image: 'torque.png',
    units: [
      {
        name: 'Newton-meter (N·m)',
        factor: 1,
      },
      {
        name: 'Dyne-centimeter(dy·cm)',
        factor: 0.0000001
      },
      {
        name: 'Kgrf-meter (kgf·m)',
        factor: 9.80665
      },
      {
        name: 'lbf-inch (lbf·in)',
        factor: 0.1129848
      },
      {
        name: 'lbf-foot (lbf·ft)',
        factor: 1.355818
      },
    ]
  },
  {
    name: 'Electricity',
    image: 'electricity.png',
    units: [
      {
        name: 'Coulomb (Cb)',
        factor: 1
      },
      {
        name: 'Abcoulomb',
        factor: 10
      },
      {
        name: 'Ampere hour (A hr)',
        factor: 3600
      },
      {
        name: 'Faraday (F)',
        factor: 96521.8999999997
      },
      {
        name: 'Statcoulomb',
        factor: 0.000000000333564
      },
      {
        name: 'Millifaraday (mF)',
        factor: 96.5219
      },
      {
        name: 'Microfaraday (mu-F)',
        factor: 9.65219e-2
      },
      {
        name: 'Picofaraday (pF)',
        factor: 9.65219e-5
      },
    ]
  },
  {
    name: 'Energy',
    image: 'energy.png',
    units: [
      {
        name: 'Joule (J)',
        factor: 1,
      },
      {
        name: 'BTU (mean)',
        factor: 1055.87,
      },
      {
        name: 'BTU (thermochemical)',
        factor: 1054.35,
      },
      {
        name: 'Calorie (SI) (cal)',
        factor: 4.1868,
      },
      {
        name: 'Calorie (mean)(cal)',
        factor: 4.19002,
      },
      {
        name: 'Calorie (thermo)',
        factor: 4.184,
      },
      {
        name: 'Electron volt (eV)',
        factor: 1.6021e-19,
      },
      {
        name: 'Erg (erg)',
        factor: 0.0000001,
      },
      {
        name: 'Foot-pound force',
        factor: 1.355818,
      },
      {
        name: 'Foot-poundal',
        factor: 4.214011e-2,
      },
      {
        name: 'Horsepower-hour',
        factor: 2684077.3,
      },
      {
        name: 'Kilocalorie (SI)(kcal)',
        factor: 4186.8,
      },
      {
        name: 'Kilocalorie (mean)(kcal)',
        factor: 4190.02,
      },
      {
        name: 'Kilowatt-hour (kW hr)',
        factor: 3600000,
      },
      {
        name: 'Ton of TNT',
        factor: 4.2e9,
      },
      {
        name: 'Volt-coulomb (V Cb)',
        factor: 1,
      },
      {
        name: 'Watt-hour (W hr)',
        factor: 3600,
      },
      {
        name: 'Watt-second (W sec)',
        factor: 1
      },
    ]
  },
  {
    name: 'Force',
    image: 'force.png',
    units: [
      {
        name: 'Newton (N)',
        factor: 1,
      },
      {
        name: 'Dyne (dy)',
        factor: 0.00001,
      },
      {
        name: 'Kilogram force (kgf)',
        factor: 9.80665,
      },
      {
        name: 'Kilopond force (kpf)',
        factor: 9.80665,
      },
      {
        name: 'Kip (k)',
        factor: 4448.222,
      },
      {
        name: 'Ounce force (ozf)',
        factor: 0.2780139,
      },
      {
        name: 'Pound force (lbf)',
        factor: 0.4535924,
      },
      {
        name: 'Poundal',
        factor: 0.138255
      },
    ]
  },
  {
    name: 'Length',
    image: 'length.png',
    units: [
      {
        name: 'Meter (m)',
        factor: 1,
      },
      {
        name: 'Angstrom (A)',
        factor: 1e-10,
      },
      {
        name: 'Astronomical unit (AU)',
        factor: 1.49598e11,
      },
      {
        name: 'Caliber (cal)',
        factor: 0.000254,
      },
      {
        name: 'Centimeter (cm)',
        factor: 0.01,
      },
      {
        name: 'Kilometer (km)',
        factor: 1000,
      },
      {
        name: 'Ell',
        factor: 1.143,
      },
      {
        name: 'Em',
        factor: 4.2323e-3,
      },
      {
        name: 'Fathom',
        factor: 1.8288,
      },
      {
        name: 'Furlong',
        factor: 201.168,
      },
      {
        name: 'Fermi (fm)',
        factor: 1e-15,
      },
      {
        name: 'Foot (ft)',
        factor: 0.3048,
      },
      {
        name: 'Inch (in)',
        factor: 0.0254,
      },
      {
        name: 'League (intl)',
        factor: 5556,
      },
      {
        name: 'League (UK)',
        factor: 5556,
      },
      {
        name: 'Light year (LY)',
        factor: 9.46055e15,
      },
      {
        name: 'Micrometer (mu-m)',
        factor: 0.000001,
      },
      {
        name: 'Mil',
        factor: 0.0000254,
      },
      {
        name: 'Millimeter (mm)',
        factor: 0.001,
      },
      {
        name: 'Nanometer (nm)',
        factor: 1e-9,
      },
      {
        name: 'Mile (intl nautical)',
        factor: 1852,
      },
      {
        name: 'Mile (UK nautical)',
        factor: 1853.184,
      },
      {
        name: 'Mile (US nautical)',
        factor: 1852,
      },
      {
        name: 'Mile (US statute)',
        factor: 1609.344,
      },
      {
        name: 'Parsec',
        factor: 3.08374e16,
      },
      {
        name: 'Pica (printer)',
        factor: 4.217518e-3,
      },
      {
        name: 'Picometer (pm)',
        factor: 1e-12,
      },
      {
        name: 'Point (pt)',
        factor: 0.0003514598,
      },
      {
        name: 'Rod',
        factor: 5.0292,
      },
      {
        name: 'Yard (yd)',
        factor: 0.9144
      },
    ]
  },
  {
    name: 'Light',
    image: 'light.png',
    units: [
      {
        name: 'Lumen/sq.meter (Lu/m^2)',
        factor: 1,
      },
      {
        name: 'Lumen/sq.centimeter',
        factor: 10000,
      },
      {
        name: 'Lumen/sq.foot',
        factor: 10.76391,
      },
      {
        name: 'Foot-candle (ft-cdl)',
        factor: 10.76391,
      },
      {
        name: 'Foot-lambert',
        factor: 10.76391,
      },
      {
        name: 'Candela/sq.meter',
        factor: 3.14159250538575,
      },
      {
        name: 'Candela/sq.centimeter',
        factor: 31415.9250538576,
      },
      {
        name: 'Lux (lux)',
        factor: 1,
      },
      {
        name: 'Phot',
        factor: 10000
      },
    ]
  },
  {
    name: 'Mass',
    image: 'mass.png',
    units: [
      {
        name: 'Kilogram (kgr)',
        factor: 1,
      },
      {
        name: 'Gram (gr)',
        factor: 0.001,
      },
      {
        name: 'Milligram (mgr)',
        factor: 1e-6,
      },
      {
        name: 'Microgram (mu-gr)',
        factor: 0.000000001,
      },
      {
        name: 'Carat (metric)(ct)',
        factor: 0.0002,
      },
      {
        name: 'Hundredweight (long)',
        factor: 50.80235,
      },
      {
        name: 'Hundredweight (short)',
        factor: 45.35924,
      },
      {
        name: 'Pound mass (lbm)',
        factor: 0.4535924,
      },
      {
        name: 'Pound mass (troy)',
        factor: 0.3732417,
      },
      {
        name: 'Ounce mass (ozm)',
        factor: 0.02834952,
      },
      {
        name: 'Ounce mass (troy)',
        factor: 0.03110348,
      },
      {
        name: 'Slug',
        factor: 14.5939,
      },
      {
        name: 'Ton (assay)',
        factor: 0.02916667,
      },
      {
        name: 'Ton (long)',
        factor: 1016.047,
      },
      {
        name: 'Ton (short)',
        factor: 907.1847,
      },
      {
        name: 'Ton (metric)',
        factor: 1000,
      },
      {
        name: 'Tonne',
        factor: 1000
      },
    ]
  },
  {
    name: 'Power',
    image: 'power.png',
    units: [
      {
        name: 'Watt (W)',
        factor: 1,
      },
      {
        name: 'Kilowatt (kW)',
        factor: 1000,
      },
      {
        name: 'Megawatt (MW)',
        factor: 1000000,
      },
      {
        name: 'Milliwatt (mW)',
        factor: 0.001,
      },
      {
        name: 'BTU (SI)/hour',
        factor: 0.2930667,
      },
      {
        name: 'BTU (thermo)/second',
        factor: 1054.35,
      },
      {
        name: 'BTU (thermo)/minute',
        factor: 17.5725,
      },
      {
        name: 'BTU (thermo)/hour',
        factor: 0.2928751,
      },
      {
        name: 'Calorie (thermo)/second',
        factor: 4.184,
      },
      {
        name: 'Calorie (thermo)/minute',
        factor: 6.973333e-2,
      },
      {
        name: 'Erg/second',
        factor: 0.0000001,
      },
      {
        name: 'Foot-pound force/hour',
        factor: 0.0003766161,
      },
      {
        name: 'Foot-pound force/minute',
        factor: 0.02259697,
      },
      {
        name: 'Foot-pound force/second',
        factor: 1.355818,
      },
      {
        name: 'Horsepower(550 ft lbf/s)',
        factor: 745.7,
      },
      {
        name: 'Horsepower (electric)',
        factor: 746,
      },
      {
        name: 'Horsepower (boiler)',
        factor: 9809.5,
      },
      {
        name: 'Horsepower (metric)',
        factor: 735.499,
      },
      {
        name: 'Horsepower (UK)',
        factor: 745.7,
      },
      {
        name: 'Kilocalorie (thermo)/min',
        factor: 69.7333,
      },
      {
        name: 'Kilocalorie (thermo)/sec',
        factor: 4184
      },
    ],
  },
  {
    name: 'Pressure',
    image: 'pressure.png',
    units: [
      {
        name: 'Newton/sq.meter',
        factor: 1,
      },
      {
        name: 'Atmosphere (normal)',
        factor: 101325,
      },
      {
        name: 'Atmosphere (techinical)',
        factor: 98066.5,
      },
      {
        name: 'Bar',
        factor: 100000,
      },
      {
        name: 'Centimeter mercury(cmHg)',
        factor: 1333.22,
      },
      {
        name: 'Centimeter water (4C)',
        factor: 98.0638,
      },
      {
        name: 'Decibar',
        factor: 10000,
      },
      {
        name: 'Kgr force/sq.centimeter',
        factor: 98066.5,
      },
      {
        name: 'Kgr force/sq.meter',
        factor: 9.80665,
      },
      {
        name: 'Kip/square inch',
        factor: 6894757,
      },
      {
        name: 'Millibar',
        factor: 100,
      },
      {
        name: 'Millimeter mercury(mmHg)',
        factor: 133.3224,
      },
      {
        name: 'Pascal (Pa)',
        factor: 1,
      },
      {
        name: 'Kilopascal (kPa)',
        factor: 1000,
      },
      {
        name: 'Megapascal (Mpa)',
        factor: 1000000,
      },
      {
        name: 'Poundal/sq.foot',
        factor: 47.88026,
      },
      {
        name: 'Pound-force/sq.foot',
        factor: 47.88026,
      },
      {
        name: 'Pound-force/sq.inch (psi)',
        factor: 6894.757,
      },
      {
        name: 'Torr (mmHg, 0C)',
        factor: 133.322
      },
    ]
  },
  {
    name: 'Time',
    image: 'time.png',
    units: [
      {
        name: 'Second (sec)',
        factor: 1,
      },
      {
        name: 'Day (mean solar)',
        factor: 8.64e4,
      },
      {
        name: 'Day (sidereal)',
        factor: 86164.09,
      },
      {
        name: 'Hour (mean solar)',
        factor: 3600,
      },
      {
        name: 'Hour (sidereal)',
        factor: 3590.17,
      },
      {
        name: 'Minute (mean solar)',
        factor: 60,
      },
      {
        name: 'Minute (sidereal)',
        factor: 60,
      },
      {
        name: 'Month (mean calendar)',
        factor: 2628000,
      },
      {
        name: 'Second (sidereal)',
        factor: 0.9972696,
      },
      {
        name: 'Year (calendar)',
        factor: 31536000,
      },
      {
        name: 'Year (tropical)',
        factor: 31556930,
      },
      {
        name: 'Year (sidereal)',
        factor: 31558150
      },
    ]
  },
  {
    name: 'Velocity',
    image: 'velocity.png',
    units: [
      {
        name: 'Meter/second (m/sec)',
        factor: 1,
      },
      {
        name: 'Foot/minute (ft/min)',
        factor: 5.08e-3,
      },
      {
        name: 'Foot/second (ft/sec)',
        factor: 0.3048,
      },
      {
        name: 'Kilometer/hour (kph)',
        factor: 0.2777778,
      },
      {
        name: 'Knot (int l)',
        factor: 0.5144444,
      },
      {
        name: 'Mile (US)/hour (mph)',
        factor: 0.44707,
      },
      {
        name: 'Mile (nautical)/hour',
        factor: 0.514444,
      },
      {
        name: 'Mile (US)/minute',
        factor: 26.8224,
      },
      {
        name: 'Mile (US)/second',
        factor: 1609.344,
      },
      {
        name: 'Speed of light (c)',
        factor: 299792458,
      },
      {
        name: 'Mach (STP)(a)',
        factor: 340.006875
      },
    ]
  },
  {
    name: 'Viscosity',
    image: 'viscosity.png',
    units: [
      {
        name: "Newton-second/meter",
        factor: 1,
      },
      {
        name: "Centipoise",
        factor: 0.001,
      },
      {
        name: "Centistoke",
        factor: 0.000001,
      },
      {
        name: "Sq.foot/second",
        factor: 9.290304e-2,
      },
      {
        name: "Poise",
        factor: 0.1,
      },
      {
        name: "Poundal-second/sq.foot",
        factor: 1.488164,
      },
      {
        name: "Pound mass/foot-second",
        factor: 1.488164,
      },
      {
        name: "Pound force-second/sq.foot",
        factor: 47.88026,
      },
      {
        name: "Rhe",
        factor: 10,
      },
      {
        name: "Slug/foot-second",
        factor: 47.88026,
      },
      {
        name: "Stoke",
        factor: 0.0001
      },
    ]
  },
  {
    name: 'Volume',
    image: 'volume.png',
    units: [
      {
        name: 'Cubic Meter (m^3)',
        factor: 1,
      },
      {
        name: 'Cubic centimeter',
        factor: 0.000001,
      },
      {
        name: 'Cubic millimeter',
        factor: 0.000000001,
      },
      {
        name: 'Acre-foot',
        factor: 1233.482,
      },
      {
        name: 'Barrel (oil)',
        factor: 0.1589873,
      },
      {
        name: 'Board foot',
        factor: 0.002359737,
      },
      {
        name: 'Bushel (US)',
        factor: 0.03523907,
      },
      {
        name: 'Cup',
        factor: 0.0002365882,
      },
      {
        name: 'Fluid ounce (US)',
        factor: 0.00002957353,
      },
      {
        name: 'Cubic foot',
        factor: 0.02831685,
      },
      {
        name: 'Gallon (UK)',
        factor: 0.004546087,
      },
      {
        name: 'Gallon (US,dry)',
        factor: 0.004404884,
      },
      {
        name: 'Gallon (US,liq)',
        factor: 0.003785412,
      },
      {
        name: 'Gill (UK)',
        factor: 0.0001420652,
      },
      {
        name: 'Gill (US)',
        factor: 0.0001182941,
      },
      {
        name: 'Cubic inch (in^3)',
        factor: 0.00001638706,
      },
      {
        name: 'Liter (new)',
        factor: 0.001,
      },
      {
        name: 'Liter (old)',
        factor: 0.001000028,
      },
      {
        name: 'Ounce (UK,fluid)',
        factor: 0.00002841305,
      },
      {
        name: 'Ounce (US,fluid)',
        factor: 0.00002957353,
      },
      {
        name: 'Peck (US)',
        factor: 8.809768e-3,
      },
      {
        name: 'Pint (US,dry)',
        factor: 0.0005506105,
      },
      {
        name: 'Pint (US,liq)',
        factor: 4.731765e-4,
      },
      {
        name: 'Quart (US,dry)',
        factor: 0.001101221,
      },
      {
        name: 'Quart (US,liq)',
        factor: 9.46353e-4,
      },
      {
        name: 'Stere',
        factor: 1,
      },
      {
        name: 'Tablespoon',
        factor: 0.00001478676,
      },
      {
        name: 'Teaspoon',
        factor: 0.000004928922,
      },
      {
        name: 'Ton (register)',
        factor: 2.831685,
      },
      {
        name: 'Cubic yard',
        factor: 0.7645549
      },
    ]
  }
]
