import { IProperty } from "@interfaces/unit.interface";

export const properties: IProperty[] = [
  {
    name: 'Acceleration',
    image: 'acceleration.png',
    units: [
      {
        name: 'Meter per second squared (m/s²)',
        factor: 1,
      },
      {
        name: 'Centimeter per second squared (cm/s²)',
        factor: 0.01,
      },
      {
        name: 'Foot per hour per second	(ft/h·s)',
        factor: 8.46667E-05,
      },
      {
        name: 'Foot per minute per second	(ft/min·s)',
        factor: 0.00508,
      },
      {
        name: 'Foor per second squared (ft/s²)',
        factor: 0.3048,
      },
      {
        name: 'Galileo (Gal)',
        factor: 0.01,
      },
      {
        name: 'Gravity (g)',
        factor: 9.80665,
      },
      {
        name: 'Inch per hour per second (in/h·s)',
        factor: 7.05556E-06,
      },
      {
        name: 'Inch per minute per second (in/min·s)',
        factor: 4.23333E-04
      },
      {
        name: 'Inch per second squared (in/s²)',
        factor: 0.0254
      },
      {
        name: 'Knot per second (kn/s)',
        factor: 0.5144444
      },
      {
        name: 'Mile per hour per second	(mi/h·s)',
        factor: 0.44704,
      },
      {
        name: 'Mile per minute per second (mi/min·s)',
        factor: 26.8244
      },
      {
        name: 'Mile per second squared (mi/s²)',
        factor: 1609.344
      },
    ],
  },
  {
    name: 'Area',
    image: 'area.png',
    units: [
      {
        name: 'Square meter (m²)',
        factor: 1,
      },
      {
        name: 'Acre (ac)',
        factor: 4046.8564224,
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
        name: 'Hectare (ha)',
        factor: 10000,
      },
      {
        name: 'Rood',
        factor: 1011.71413184285
      },
      {
        name: 'Square centimeter (m²)',
        factor: 0.0001
      },
      {
        name: 'Square kilometer (km²)',
        factor: 1000000
      },
      {
        name: 'Circular mil',
        factor: 5.067075e-10,
      },
      {
        name: 'Square foot (ft²)',
        factor: 9.290304e-2,
      },
      {
        name: 'Square inch (in²)',
        factor: 6.4516e-4,
      },
      {
        name: 'Square mile (mi²)',
        factor: 2589988.110336
      },
      {
        name: 'Square yard (yd²)',
        factor: 0.83612736
      }
    ]
  },
  {
    name: 'Angle',
    image: 'angle.png',
    units: [
      {
        name: 'Degree',
        factor: 1,
      },
      {
        name: 'Radian (rad)',
        factor: 57.29578
      },
      {
        name: 'Minutes',
        factor: 0.016667
      },
      {
        name: 'Seconds',
        factor: 2.777778e-4,
      },
      {
        name: 'Octant',
        factor: 45,
      },
      {
        name: 'Sextant',
        factor: 60,
      },
      {
        name: 'Quadrant',
        factor: 90,
      },
      {
        name: 'Revolution (r)',
        factor: 360,
      },
      {
        name: 'Gon',
        factor: 0.9,
      },
      {
        name: 'Mil',
        factor: 0.05625,
      },
    ],
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
    name: 'Density',
    image: 'density.png',
    units: [
      {
        name: 'Kilogram per cubic meter (kg/m³)',
        factor: 1
      },
      {
        name: 'Gram per cubic centimeter (g/cm³)',
        factor: 1000,
      },
      {
        name: 'Kilogram per cubic centimeter (kg/cm³)',
        factor: 1000000,
      },
      {
        name: 'Gram per cubic meter (g/m³)',
        factor: 0.001,
      },
      {
        name: 'Gram per milliliter (g/mL)',
        factor: 1000,
      },
      {
        name: 'Gram per liter (kg/L)',
        factor: 1,
      },
      {
        name: 'Kilogram per liter (kg/L)',
        factor: 1000,
      },
      {
        name: 'Ounce per cubic inch (oz/in³)',
        factor: 1729.994,
      },
      {
        name: 'Ounce per cubic foot (oz/ft³)',
        factor: 1.001153
      },
      {
        name: 'Pound per cubic inch (lb/in³)',
        factor: 27679.90471,
      },
      {
        name: 'Pound per cubic foot (lb/ft³)',
        factor: 16.018463,
      },
      {
        name: 'Ounce per gallon imperial (oz/gal)',
        factor: 6.236023,
      },
      {
        name: 'Ounce per gallon U.S (oz/gal)',
        factor: 7.489151,
      },
      {
        name: 'Pound per gallon imperial (lb/gal)',
        factor: 99.776372,
      },
      {
        name: 'Pound per gallon U.S. (lb/gal)',
        factor: 119.826,
      },
      {
        name: 'Slug per cubic foot (slug/ft³)',
        factor: 515.3788184,
      },
      {
        name: 'Ton per cubic yard long (l ton/yd³)',
        factor: 1328.939,
      },
      {
        name: 'Ton per cubic yard short (sh ton/yd³)',
        factor: 1186.553
      },
    ],
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
        name: 'BTU (IT)',
        factor: 1055.056,
      },
      {
        name: 'BTU (th)',
        factor: 1054.35,
      },
      {
        name: 'BTU (mean)',
        factor: 1055.87,
      },
      {
        name: 'BTU (39°F)',
        factor: 1059.67,
      },
      {
        name: 'BTU (59°F)',
        factor: 1055.87,
      },
      {
        name: 'BTU (60°F)',
        factor: 1054.68,
      },
      {
        name: 'Calorie (IT)',
        factor: 4.1868,
      },
      {
        name: 'Calorie (thermo)',
        factor: 4.184,
      },
      {
        name: 'Calorie (mean)',
        factor: 4.19002,
      },
      {
        name: 'Calorie (15°C)',
        factor: 4.1858,
      },
      {
        name: 'Calorie (20°C)',
        factor: 4.1819,
      },
      {
        name: 'Electronvolt (eV)',
        factor: 1.6021e-19,
      },
      {
        name: 'Erg (erg)',
        factor: 0.0000001,
      },
      {
        name: 'Foot-poundal (ft·pdl)',
        factor: 4.214011e-2,
      },
      {
        name: 'Foot-pound force (ft·lbf)',
        factor: 1.355818,
      },
      {
        name: 'Horsepower-hour',
        factor: 2684077.3,
      },
      {
        name: 'Inch-pound force (in·lbf)',
        factor: 0.112984829,
      },
      {
        name: 'Kilocalorie (IT)',
        factor: 4186.8,
      },
      {
        name: 'Kilocalorie (thermo)',
        factor: 4184,
      },
      {
        name: 'Kilocalorie (mean)',
        factor: 4190.02,
      },
      {
        name: 'Kilowatt-hour (kW·hr)',
        factor: 3600000,
      },
      {
        name: 'Quad (IT)',
        factor: 1.05506E+18,
      },
      {
        name: 'Therm (E.C.)',
        factor: 105506000
      },
      {
        name: 'Therm (U.S.)',
        factor: 105480400
      },
      {
        name: 'Ton of coal (TOC)',
        factor: 29307600000,
      },
      {
        name: 'Ton of oil (TOE)',
        factor: 41868000000,
      },
      {
        name: 'Ton of TNT (tTNT)',
        factor: 4184000000,
      },
      {
        name: 'Volt-coulomb (V·Cb)',
        factor: 1,
      },
      {
        name: 'Watt-hour (W·h)',
        factor: 3600,
      },
      {
        name: 'Watt-second (W·s)',
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
        name: 'Dyne (dyn)',
        factor: 0.00001,
      },
      {
        name: 'Kilogram force (kgf)',
        factor: 9.80665,
      },
      {
        name: 'Kilopond (kp)',
        factor: 9.80665,
      },
      {
        name: 'Kip (kip)',
        factor: 4448.222,
      },
      {
        name: 'Kilonewton (kN)',
        factor: 1000,
      },
      {
        name: 'Ounce force (ozf)',
        factor: 0.2780139,
      },
      {
        name: 'Poundal (pdl)',
        factor: 0.138255
      },
      {
        name: 'Pound force (lbf)',
        factor: 4.448222,
      },
      {
        name: 'Ton-force (tnf)',
        factor: 8896.443
      },
    ],
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
        name: 'Mile (U.S nautical)',
        factor: 1852,
      },
      {
        name: 'Mile (U.S statute)',
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
        name: 'Lumen/sq.meter (Lu/m²)',
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
        name: 'Gram (gr)',
        factor: 1,
      },
      {
        name: 'Carat metric (ct)',
        factor: 0.2,
      },
      {
        name: 'Point metric (pt)',
        factor: 0.002,
      },
      {
        name: 'Dram advp (dr)',
        factor: 1.771845195,
      },
      {
        name: 'Dram troy (dr)',
        factor: 3.8879346,
      },
      {
        name: 'Grain metric (gr)',
        factor: 0.05,
      },
      {
        name: 'Grain troy (gr)',
        factor: 0.06479891,
      },
      {
        name: 'Hundredweight long (hwt)',
        factor: 50802.34544,
      },
      {
        name: 'Hundredweight short (hwt)',
        factor: 45359.237,
      },
      {
        name: 'Kilogram (kg)',
        factor: 1000,
      },
      {
        name: 'Megagram (Mg)',
        factor: 1000000,
      },
      {
        name: 'Milligram (mg)',
        factor: 0.001,
      },
      {
        name: 'Microgram (mu-gr)',
        factor: 0.001,
      },
      {
        name: 'Ounce avdp (oz)',
        factor: 28.34952313,
      },
      {
        name: 'Ounce troy (oz)',
        factor: 31.1034768,
      },
      {
        name: 'Pennyweight (dwt)',
        factor: 1.55517384,
      },
      {
        name: 'Pound avdp (lb)',
        factor: 453.59237,
      },
      {
        name: 'Pound metric (lb)',
        factor: 500,
      },
      {
        name: 'Pound (troy)',
        factor: 373.2417216,
      },
      {
        name: 'Slug (slug)',
        factor: 14593.903,
      },
      {
        name: 'Stone (st)',
        factor: 6350.29318,
      },
      {
        name: 'Ton assay long (I AT)',
        factor: 32.6666667,
      },
      {
        name: 'Ton assay short (sh AT)',
        factor: 29.1666667,
      },
      {
        name: 'Ton long (l tn)',
        factor: 1016046.909,
      },
      {
        name: 'Ton short (sh tn)',
        factor: 907184.74,
      },
      {
        name: 'Ton metric (t)',
        factor: 1000000,
      },
      {
        name: 'Tonne (U.S. t)',
        factor: 1000000
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
        name: 'Pascal (Pa)',
        factor: 1,
      },
      {
        name: 'Atmosphere standard (atm)',
        factor: 101325,
      },
      {
        name: 'Atmosphere techinical (at)',
        factor: 98066.5,
      },
      {
        name: 'Bar (bar)',
        factor: 100000,
      },
      {
        name: 'Barye (barye)',
        factor: 0.1,
      },
      {
        name: 'Centimeter of mercury (cmHg)',
        factor: 1333.22,
      },
      {
        name: 'Centimeter of water 4°C (cmH2O)',
        factor: 98.0638,
      },
      {
        name: 'Decibar (dbar)',
        factor: 1000,
      },
      {
        name: 'Foot of mercury (ftHg)',
        factor: 40636.66,
      },
      {
        name: 'Foot of water 39.2°F (ftH2O)',
        factor: 2988.98,
      },
      {
        name: 'Inch of mercury (inHg)',
        factor: 3386.389,
      },
      {
        name: 'Inch of water 39.2°F (inH2O)',
        factor: 248.082,
      },
      {
        name: 'kilogram-force per square millimeter',
        factor: 9806650,
      },
      {
        name: 'Kip per square inch (kip/in²)',
        factor: 6894757,
      },
      {
        name: 'Millibar (mbar)',
        factor: 100,
      },
      {
        name: 'Millimeter mercury (mmHg)',
        factor: 133.3224,
      },
      {
        name: 'Millimeter of water 3.98°C (mmH2O)',
        factor: 9.80638,
      },
      {
        name: 'Hectopascal (hPa)',
        factor: 100,
      },
      {
        name: 'Kilopascal (kPa)',
        factor: 1000,
      },
      {
        name: 'Pound per square foot (lb/ft²)',
        factor: 47.88026,
      },
      {
        name: 'Pound per square inch (psi)',
        factor: 6894.757,
      },
      {
        name: 'Poundal per square foot (pdl/ft²)',
        factor: 1.488164,
      },
      {
        name: 'Short ton per square foot (sh tn/ft²)',
        factor: 95760.518,
      },
      {
        name: 'Torr (torr)',
        factor: 133.3224
      },
    ]
  },
  {
    name: 'Time',
    image: 'time.png',
    units: [
      {
        name: 'Second (s)',
        factor: 1,
      },
      {
        name: 'Nanosecond (ns)',
        factor: 0.000000001,
      },
      {
        name: 'Millisecond (ms)',
        factor: 0.001,
      },
      {
        name: 'Second sidereal (s)',
        factor: 0.99726956,
      },
      {
        name: 'Minute (min)',
        factor: 60,
      },
      {
        name: 'Minute sidereal (min)',
        factor: 59.83617361,
      },
      {
        name: 'Hour (h)',
        factor: 3600,
      },
      {
        name: 'Hour sidereal (h)',
        factor: 3590.170417,
      },
      {
        name: 'Day (d)',
        factor: 86400,
      },
      {
        name: 'Day sidereal (d)',
        factor: 86164.09,
      },
      {
        name: 'Week (wk)',
        factor: 604800,
      },
      {
        name: 'Month (mo)',
        factor: 2628000,
      },
      {
        name: 'Shake (shake)',
        factor: 0.00000001,
      },
      {
        name: 'Year (yr)',
        factor: 31536000,
      },
      {
        name: 'Year tropical (yr)',
        factor: 31556930,
      },
      {
        name: 'Year sidereal (yr)',
        factor: 31449892.85,
      },
      {
        name: 'decade (dec)',
        factor: 315360000,
      },
      {
        name: 'Century (c)',
        factor: 3153600000,
      },
      {
        name: 'Millennium (millennium)',
        factor: 31536000000,
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
        name: 'Mile (U.S.)/hour (mph)',
        factor: 0.44707,
      },
      {
        name: 'Mile (nautical)/hour',
        factor: 0.514444,
      },
      {
        name: 'Mile (U.S.)/minute',
        factor: 26.8224,
      },
      {
        name: 'Mile (U.S.)/second',
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
        factor: 1233.481838,
      },
      {
        name: 'Barrel (petroleum)',
        factor: 0.1589873,
      },
      {
        name: 'Barrel (Imperial)',
        factor: 0.16365924,
      },
      {
        name: 'Board foot',
        factor: 0.002359737,
      },
      {
        name: 'BU.Shel (U.S.)',
        factor: 0.03523907,
      },
      {
        name: 'Cup',
        factor: 0.0002365882,
      },
      {
        name: 'Cord (firewood)',
        factor: 3.624556364
      },
      {
        name: 'Cubic foot',
        factor: 0.028316847,
      },
      {
        name: 'Cubic inch',
        factor: 1.63871E-05,
      },
      {
        name: 'Fluid ounce (U.S.)',
        factor: 0.00002957353,
      },
      {
        name: 'Gallon (UK)',
        factor: 0.004546087,
      },
      {
        name: 'Gallon (U.S. dry)',
        factor: 0.004404884,
      },
      {
        name: 'Gallon (U.S. fluid)',
        factor: 0.003785412,
      },
      {
        name: 'Gill (UK)',
        factor: 0.0001420652,
      },
      {
        name: 'Gill (U.S.)',
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
        name: 'Ounce (Imperial fluid)',
        factor: 2.84131E-05,
      },
      {
        name: 'Ounce (U.S. fluid)',
        factor: 2.95735E-05,
      },
      {
        name: 'Peck (U.S. dry )',
        factor: 8.809768e-3,
      },
      {
        name: 'Pint (U.S. dry)',
        factor: 0.0005506105,
      },
      {
        name: 'Pint (U.S fluid)',
        factor: 4.731765e-4,
      },
      {
        name: 'Quart (Imperial)',
        factor: 0.001136523,
      },
      {
        name: 'Quart (U.S. dry)',
        factor: 0.001101221,
      },
      {
        name: 'Quart (U.S. fluid)',
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
        name: 'Teaspoon (U.S.)',
        factor: 4.92892E-06,
      },
      {
        name: 'Teaspoon (Imperial)',
        factor: 5.91939E-06,
      },
      {
        name: 'Teaspoon (Canadian)',
        factor: 4.73551E-06,
      },
      {
        name: 'Ton (register)',
        factor: 2.831685,
      },
      {
        name: 'Cubic yard',
        factor: 0.764554858
      },
    ]
  }
]
