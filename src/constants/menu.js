import { adminRoot } from './defaultValues';
// import { UserRole } from "../helpers/authHelper"

const data = [
  {
    id: 'gogo',
    icon: 'iconsminds-air-balloon-1',
    label: '메뉴1',
    to: `${adminRoot}/gogo`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: '메뉴1의 1',
        to: `${adminRoot}/gogo/start`,
      },
    ],
  },
  {
    id: 'secondmenu',
    icon: 'iconsminds-three-arrow-fork',
    label: '메뉴2',
    to: `${adminRoot}/second-menu`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: '메뉴 2의 1',
        to: `${adminRoot}/second-menu/second`,
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: '메뉴3',
    to: `${adminRoot}/blank-page`,
  },
];
export default data;
