'use client'

import { Card, CardContent } from "@/components/ui/card"
import { FileUp } from "lucide-react"
import { useDropzone } from 'react-dropzone';


export default function Component() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <Card>
            <CardContent className="p-6 space-y-4">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center" >
                    <input {...getInputProps()} />
                        <FileUp className="w-12 h-12 text-gray-500" />
                        <span className="text-sm font-medium text-gray-500">Drag and drop a file or click to browse</span>
                        <span className="text-xs text-gray-500">PDF, image, video, or audio</span>
                    </div>
                </div>

                <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                </aside>
            </CardContent>
        </Card>
    )
}
