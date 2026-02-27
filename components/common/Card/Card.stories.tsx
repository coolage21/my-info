import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    size: {
      control: {type: 'radio'},
      options: ['small', 'large'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Small: Story = {
    args: {
    img: '/next.svg',
    title: '제목',
    desc: '내용입니다.',
    badge: '디자인:30#',
    size: 'small',
  },
}