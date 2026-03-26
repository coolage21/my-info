import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton', // 스토리북에서 경로
  component: IconButton,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

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