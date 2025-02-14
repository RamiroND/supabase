import authProviders from '../data/authProviders'
import { Card } from '@supabase/ui'
import Link from 'next/link'

export default function AuthProviders() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {authProviders.map((x: any) => (
        <div key={x.name}>
          <Link href={x.href}>
            <Card>
              <div className="flex justify-between gap-10">
                <p>{x.name}</p>
                <p className="text-tiny flex items-center font-normal uppercase text-white">
                  {x.official ? (
                    <span className="rounded bg-green-600 py-1 px-2">Official</span>
                  ) : (
                    <span className="rounded bg-gray-500 p-1">Unofficial</span>
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex w-full justify-between rounded border-2 border-solid border-gray-600 p-1 text-xs">
                  <span>Platform:</span>
                  <span>{x.platform.toString()}</span>
                </div>
                <div className="flex w-full justify-between rounded border-2 border-solid border-gray-600 p-1 text-xs">
                  <span>Self-Hosted:</span>
                  <span>{x.selfHosted.toString()}</span>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  )
}
