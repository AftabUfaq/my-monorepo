
import  React from "react"
import { Button, ButtonText, GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from '@gluestack-ui/config';
export const SharedButton = ()  => {
    return (
        <GluestackUIProvider config={config}>
            <Button>
            <ButtonText>Hello world</ButtonText>
            </Button>
        </GluestackUIProvider>
    );
}

