from contextlib import asynccontextmanager

import httpx


@asynccontextmanager
async def get_async_client() -> httpx.AsyncClient:
    async with httpx.AsyncClient() as client:
        yield client
