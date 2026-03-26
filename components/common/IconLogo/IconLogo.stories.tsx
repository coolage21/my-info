import type { Meta, StoryObj } from "@storybook/react";
import IconLogo from "./IconLogo";

const meta: Meta<typeof IconLogo> = {
  title: "Components/IconLogo", // 스토리북에서 경로
  component: IconLogo,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconLogo>;

// 기본 버튼
export const Small: Story = {
  args: {
    label: "작은 버튼",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "큰 버튼",
    size: "large",
  },
};

// 클릭 이벤트 테스트용
export const Clickable: Story = {
  args: {
    label: "클릭하세요",
    size: "large",
    onClick: () => alert("버튼 클릭!"),
  },
};
