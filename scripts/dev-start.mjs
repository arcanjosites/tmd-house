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

freePort(PORT);

console.log("");
console.log("  TMD House — dev server");
console.log(`  URL: http://localhost:${PORT}`);
console.log("");
console.log("  'Ready' = servidor no ar.");
console.log("  'Compiling /' aparece ao abrir a URL no navegador.");
console.log("  Pre-compilando a home agora (10-20s)...");
console.log("");

const child = spawn(`npx next dev -p ${PORT} -H 0.0.0.0`, {
  stdio: "inherit",
  shell: true,
  cwd: process.cwd(),
});

// Trigger first compile so "Compiling /" shows without opening the browser manually
setTimeout(async () => {
  try {
    const res = await fetch(`http://127.0.0.1:${PORT}/`, {
      signal: AbortSignal.timeout(120000),
    });
    console.log(`\n  Home compilada (HTTP ${res.status}). Abra http://localhost:${PORT}\n`);
  } catch {
    console.log(`\n  Abra http://localhost:${PORT} no navegador para compilar.\n`);
  }
}, 4000);

child.on("exit", (code) => process.exit(code ?? 0));
