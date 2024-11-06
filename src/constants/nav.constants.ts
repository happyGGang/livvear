import home from '../assets/icon/home.svg';
import notifications from '../assets/icon/notification.svg';
import history from '../assets/icon/history.svg';
import user from '../assets/icon/user.svg';
import group from '../assets/icon/group.svg';
import analysis from '../assets/icon/analysis.svg';

export const adminNavItems = [
  { name: '홈', to: '/home', icon: home },
  { name: '우리가게 현황', to: '/status', icon: analysis },
  { name: '모임', to: '/meetings', icon: group },
  { name: '내 정보', to: '/profile', icon: user },
];

export const userNavItems = [
  { name: '홈', to: '/home', icon: home },
  { name: '알림', to: '/notifications', icon: notifications },
  { name: '이용내역', to: '/usage-history', icon: history },
  { name: '내 정보', to: '/profile', icon: user },
];
