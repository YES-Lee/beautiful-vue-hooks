/**
 *
 */
declare const useStorage: (type: "local" | "session") => <T = any>(storageKey: string, defaultValue: T) => (string | (() => undefined))[] | (import("@vue/composition-api").ComputedRef<any> | ((v: any) => void))[];
export default useStorage;
//# sourceMappingURL=useStorage.d.ts.map