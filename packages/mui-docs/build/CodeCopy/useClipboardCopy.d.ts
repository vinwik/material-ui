export default function useClipboardCopy(): {
    copy: (text: string) => Promise<void>;
    isCopied: boolean;
};
