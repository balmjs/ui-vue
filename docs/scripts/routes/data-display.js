const List = () => import('@/views/components/list');
const ImageList = () => import('@/views/components/image-list');
const Card = () => import('@/views/components/card');
const Table = () => import('@/views/components/table');
const Pagination = () => import('@/views/components/pagination');

export default [
  {
    path: 'list',
    name: 'data-display.list',
    component: List
  },
  {
    path: 'image-list',
    name: 'data-display.image-list',
    component: ImageList
  },
  {
    path: 'card',
    name: 'data-display.card',
    component: Card
  },
  {
    path: 'table',
    name: 'data-display.table',
    component: Table
  },
  {
    path: 'pagination',
    name: 'data-display.pagination',
    component: Pagination
  }
];
