import { rmSync } from "fs";
import { execSync, spawn } from "child_process";

const PORT = 5000;

function freePort(port) {
  try {
    if (process.platform === "win32") {
      const script = `
        $conns = Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue |
          Where-Object { $_.State -eq 'Listen' };
        foreach ($c in $conns) {
          $procId = $c.OwningProcess;
          $p = Get-Process -Id $procId -ErrorAction SilentlyContinue;
          if ($p -and $p.ProcessName -eq 'node') {
            Write-Output \"Encerrando node PID $procId na porta ${port}\";
            Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue;
          }
        }
      `;
      execSync(`powershell -NoProfile -Command "${script.replace(/\n/g, " ")}"`, {
        stdio: "inherit",
      });
    } else {
      execSync(`lsof -ti:${port} | xargs kill -9 2>/dev/null || true`, { shell: true });
    }
  } catch {
    // Port already free
  }
}

rmSync(".next", { recursive: true, force: true });
console.log("Cache .next removido.");

freePort(PORT);
console.log(`Iniciando em http://localhost:${PORT}`);

const child = spawn(`npx next dev -p ${PORT} -H 0.0.0.0`, {
  stdio: "inherit",
  shell: true,
  cwd: process.cwd(),
});

child.on("exit", (code) => process.exit(code ?? 0));
