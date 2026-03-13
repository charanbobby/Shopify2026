FROM python:3.11-slim

WORKDIR /app

# Install system deps needed by some langchain packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 22 (needed for Shopify Dev MCP server via npx)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/*

# Install uv (needed for uvx to run MCP servers like mcp-server-fetch)
RUN curl -LsSf https://astral.sh/uv/install.sh | sh \
    && ln -s /root/.local/bin/uv /usr/local/bin/uv \
    && ln -s /root/.local/bin/uvx /usr/local/bin/uvx

COPY requirements-jupyter.txt .
RUN pip install --no-cache-dir -r requirements-jupyter.txt

# Register the kernel so Jupyter can find it
RUN python -m ipykernel install --sys-prefix --name python3 --display-name "Python 3 (LangChain)"

EXPOSE 8888

CMD ["jupyter", "lab", \
     "--ip=0.0.0.0", \
     "--port=8888", \
     "--no-browser", \
     "--allow-root", \
     "--NotebookApp.token=''", \
     "--notebook-dir=/app/work"]
