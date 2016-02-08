import Ember from 'ember';

var countries = [
{id:1,name: 'Andorra',abbreviation: 'AD'},
{id:2,name: 'Argentina',abbreviation: 'AR'},
{id:3,name: 'American Samoa',abbreviation: 'AS'},
{id:4,name: 'Austria',abbreviation: 'AT'},
{id:5,name: 'Australia',abbreviation: 'AU'},
{id:6,name: 'Bangladesh',abbreviation: 'BD'},
{id:7,name: 'Belgium',abbreviation: 'BE'},
{id:8,name: 'Bulgaria',abbreviation: 'BG'},
{id:9,name: 'Brazil',abbreviation: 'BR'},
{id:10,name: 'Canada',abbreviation: 'CA'},
{id:11,name: 'Switzerland',abbreviation: 'CH'},
{id:12,name: 'Czech Republic',abbreviation: 'CZ'},
{id:13,name: 'Germany',abbreviation: 'DE'},
{id:14,name: 'Denmark',abbreviation: 'DK'},
{id:15,name: 'Dominican Republic',abbreviation: 'DO'},
{id:16,name: 'Spain',abbreviation: 'ES'},
{id:17,name: 'Finland',abbreviation: 'FI'},
{id:18,name: 'Faroe Islands',abbreviation: 'FO'},
{id:19,name: 'France',abbreviation: 'FR'},
{id:20,name: 'Great Britain',abbreviation: 'GB'},
{id:21,name: 'French Guyana',abbreviation: 'GF'},
{id:22,name: 'Guernsey',abbreviation: 'GG'},
{id:23,name: 'Greenland',abbreviation: 'GL'},
{id:24,name: 'Guadeloupe',abbreviation: 'GP'},
{id:25,name: 'Guatemala',abbreviation: 'GT'},
{id:26,name: 'Guam',abbreviation: 'GU'},
{id:27,name: 'Guyana',abbreviation: 'GY'},
{id:28,name: 'Croatia',abbreviation: 'HR'},
{id:29,name: 'Hungary',abbreviation: 'HU'},
{id:30,name: 'Isle of Man',abbreviation: 'IM'},
{id:31,name: 'India',abbreviation: 'IN'},
{id:32,name: 'Iceland',abbreviation: 'IS'},
{id:33,name: 'Italy',abbreviation: 'IT'},
{id:34,name: 'Jersey',abbreviation: 'JE'},
{id:35,name: 'Japan',abbreviation: 'JP'},
{id:36,name: 'Liechtenstein',abbreviation: 'LI'},
{id:37,name: 'Sri Lanka',abbreviation: 'LK'},
{id:38,name: 'Lithuania',abbreviation: 'LT'},
{id:39,name: 'Luxembourg',abbreviation: 'LU'},
{id:40,name: 'Monaco',abbreviation: 'MC'},
{id:41,name: 'Moldavia',abbreviation: 'MD'},
{id:42,name: 'Marshall Islands',abbreviation: 'MH'},
{id:43,name: 'Macedonia',abbreviation: 'MK'},
{id:44,name: 'Northern Mariana Islands',abbreviation: 'MP'},
{id:45,name: 'Martinique',abbreviation: 'MQ'},
{id:46,name: 'Mexico',abbreviation: 'MX'},
{id:47,name: 'Malaysia',abbreviation: 'MY'},
{id:48,name: 'Holland',abbreviation: 'NL'},
{id:49,name: 'Norway',abbreviation: 'NO'},
{id:50,name: 'New Zealand',abbreviation: 'NZ'},
{id:51,name: 'Phillippines',abbreviation: 'PH'},
{id:52,name: 'Pakistan',abbreviation: 'PK'},
{id:53,name: 'Poland',abbreviation: 'PL'},
{id:54,name: 'Saint Pierre and Miquelon',abbreviation: 'PM'},
{id:55,name: 'Puerto Rico',abbreviation: 'PR'},
{id:56,name: 'Portugal',abbreviation: 'PT'},
{id:57,name: 'French Reunion',abbreviation: 'RE'},
{id:58,name: 'Russia',abbreviation: 'RU'},
{id:59,name: 'Sweden',abbreviation: 'SE'},
{id:60,name: 'Slovenia',abbreviation: 'SI'},
{id:61,name: 'Svalbard & Jan Mayen Islands',abbreviation: 'SJ'},
{id:62,name: 'Slovak Republic',abbreviation: 'SK'},
{id:63,name: 'San Marino',abbreviation: 'SM'},
{id:64,name: 'Thailand',abbreviation: 'TH'},
{id:65,name: 'Turkey',abbreviation: 'TR'},
{id:66,name: 'United States',abbreviation: 'US'},
{id:67,name: 'Vatican',abbreviation: 'VA'},
{id:68,name: 'Virgin Islands',abbreviation: 'VI'},
{id:69,name: 'Mayotte',abbreviation: 'YT'},
{id:70,name: 'South Africa',abbreviation: 'ZA'}

 ];

 
export default Ember.Route.extend({
  model() {
	  return Ember.RSVP.hash({
      countries: countries,
	 
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'countries', model.countries);
    Ember.set(controller, 'address', model.address);

  }
});


