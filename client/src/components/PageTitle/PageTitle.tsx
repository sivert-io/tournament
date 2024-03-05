import Title from "antd/es/typography/Title";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <Title level={1} style={{ margin: 0 }}>
      {children}
    </Title>
  );
}
