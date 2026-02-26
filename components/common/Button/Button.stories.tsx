import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button', // 스토리북에서 경로
  component: Button,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Small: Story = {
  args: {
    label: '작은 버튼',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: '큰 버튼',
    size: 'large',
  },
};

// 클릭 이벤트 테스트용
export const Clickable: Story = {
  args: {
    label: '클릭하세요',
    size: 'large',
    onClick: () => alert('버튼 클릭!'),
  },
};