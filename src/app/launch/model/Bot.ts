import { spawn, ChildProcess } from 'child_process';

import { Launchable } from '../interface/Launchable';
import { Closable } from '../interface/Closable';

export class Bot implements Launchable, Closable
{
    private path: string;
    private name: string;
    private botProcess: ChildProcess;
    private processRunning: boolean = false;

    public isRunning(): boolean
    {
        return this.processRunning;
    }

    public setName(name: string)
    {
        this.name = name;
    }

    public setPath(p: string)
    {
        this.path = p;
    }

    public close(c: string)
    {
        if (!this.botProcess)
        {
            return;
        }

        this.botProcess.stdin.write(c);
        this.botProcess.stdin.end();
        this.processRunning = false;
    }

    public launch(): boolean
    {
        if (!this.path || this.path.length === 0)
        {
            return false;
        }

        this.botProcess = spawn('node', [`${this.path}`]);
        this.botProcess.stdin.setDefaultEncoding('utf-8');
        this.processRunning = true;

        this.botProcess.stdout.on('data', d => {
            console.log(`stdout: ${d}`);
        });

        this.botProcess.stderr.on('data', d => {
            console.log(`stdout: ${d}`);
        });

        this.botProcess.on('close', code => {
            console.log(`${this.name} exited with code ${code}`);
        });

        return true;
    }
}