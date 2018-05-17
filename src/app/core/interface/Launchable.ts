export interface Launchable
{
    setPath(p: string): void;
    launch(): boolean;
}