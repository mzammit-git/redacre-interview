{
    "msg": {
        "changed": true,
        "failed": false,
        "instance_ids": [
            "i-0215996e8259b9fb7"
        ],
        "instances": [
            {
                "ami_launch_index": 0,
                "architecture": "x86_64",
                "block_device_mappings": [
                    {
                        "device_name": "/dev/sda1",
                        "ebs": {
                            "attach_time": "2022-10-14T14:36:53+00:00",
                            "delete_on_termination": true,
                            "status": "attaching",
                            "volume_id": "vol-00ba4e0953aa03736"
                        }
                    }
                ],
                "capacity_reservation_specification": {
                    "capacity_reservation_preference": "open"
                },
                "client_token": "81196509405e4e90969a86418905263f",
                "cpu_options": {
                    "core_count": 1,
                    "threads_per_core": 1
                },
                "ebs_optimized": false,
                "ena_support": true,
                "enclave_options": {
                    "enabled": false
                },
                "hibernation_options": {
                    "configured": false
                },
                "hypervisor": "xen",
                "image_id": "ami-08c40ec9ead489470",
                "instance_id": "i-0215996e8259b9fb7",
                "instance_type": "t2.micro",
                "key_name": "redacre-ec2-key",
                "launch_time": "2022-10-14T14:36:52+00:00",
                "maintenance_options": {
                    "auto_recovery": "default"
                },
                "metadata_options": {
                    "http_endpoint": "enabled",
                    "http_protocol_ipv6": "disabled",
                    "http_put_response_hop_limit": 1,
                    "http_tokens": "optional",
                    "instance_metadata_tags": "disabled",
                    "state": "pending"
                },
                "monitoring": {
                    "state": "disabled"
                },
                "network_interfaces": [
                    {
                        "attachment": {
                            "attach_time": "2022-10-14T14:36:52+00:00",
                            "attachment_id": "eni-attach-00f6b9881fe2096aa",
                            "delete_on_termination": true,
                            "device_index": 0,
                            "network_card_index": 0,
                            "status": "attaching"
                        },
                        "description": "",
                        "groups": [
                            {
                                "group_id": "sg-06cfe55303515202b",
                                "group_name": "default"
                            }
                        ],
                        "interface_type": "interface",
                        "ipv6_addresses": [],
                        "mac_address": "16:00:be:8c:86:d7",
                        "network_interface_id": "eni-072604a438d7ad5b6",
                        "owner_id": "275858758531",
                        "private_dns_name": "ip-172-31-71-246.ec2.internal",
                        "private_ip_address": "172.31.71.246",
                        "private_ip_addresses": [
                            {
                                "primary": true,
                                "private_dns_name": "ip-172-31-71-246.ec2.internal",
                                "private_ip_address": "172.31.71.246"
                            }
                        ],
                        "source_dest_check": true,
                        "status": "in-use",
                        "subnet_id": "subnet-0ea582aea553c6e3e",
                        "vpc_id": "vpc-03e2014dd7d722ff9"
                    }
                ],
                "placement": {
                    "availability_zone": "us-east-1f",
                    "group_name": "",
                    "tenancy": "default"
                },
                "platform_details": "Linux/UNIX",
                "private_dns_name": "ip-172-31-71-246.ec2.internal",
                "private_dns_name_options": {
                    "enable_resource_name_dns_a_record": false,
                    "enable_resource_name_dns_aaaa_record": false,
                    "hostname_type": "ip-name"
                },
                "private_ip_address": "172.31.71.246",
                "product_codes": [],
                "public_dns_name": "",
                "root_device_name": "/dev/sda1",
                "root_device_type": "ebs",
                "security_groups": [
                    {
                        "group_id": "sg-06cfe55303515202b",
                        "group_name": "default"
                    }
                ],
                "source_dest_check": true,
                "state": {
                    "code": 0,
                    "name": "pending"
                },
                "state_transition_reason": "",
                "subnet_id": "subnet-0ea582aea553c6e3e",
                "tags": {
                    "Environment": "redacre"
                },
                "usage_operation": "RunInstances",
                "usage_operation_update_time": "2022-10-14T14:36:52+00:00",
                "virtualization_type": "hvm",
                "vpc_id": "vpc-03e2014dd7d722ff9"
            }
        ],
        "spec": {
            "BlockDeviceMappings": [],
            "ClientToken": "81196509405e4e90969a86418905263f",
            "ImageId": "ami-08c40ec9ead489470",
            "InstanceType": "t2.micro",
            "KeyName": "redacre-ec2-key",
            "MaxCount": 1,
            "MinCount": 1,
            "NetworkInterfaces": [
                {
                    "AssociatePublicIpAddress": true,
                    "DeviceIndex": 0,
                    "SubnetId": "subnet-0ea582aea553c6e3e"
                }
            ],
            "TagSpecifications": [
                {
                    "ResourceType": "volume",
                    "Tags": [
                        {
                            "Key": "Environment",
                            "Value": "redacre"
                        }
                    ]
                },
                {
                    "ResourceType": "instance",
                    "Tags": [
                        {
                            "Key": "Environment",
                            "Value": "redacre"
                        }
                    ]
                }
            ]
        }
    }
}

