import CONTEXT_NAME from "./context";

export default function CONTEXT_PROVIDER({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CONTEXT_NAME.Provider value={null}>{children}</CONTEXT_NAME.Provider>
	);
}
