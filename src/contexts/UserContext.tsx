import { createContext, useState } from 'react';
import { ReactNode } from 'react';

const UserContext = createContext<
	| {
			user: string | null;
			setUser: React.Dispatch<React.SetStateAction<string | null>>;
	  }
	| undefined
>(undefined);

function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<string | null>(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
export { UserProvider, UserContext };
