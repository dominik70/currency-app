interface Props {
  children: React.ReactNode;
}

export const Result = ({ children }: Props) => {
  return <p className="font-medium text-lg">{children}</p>;
};
